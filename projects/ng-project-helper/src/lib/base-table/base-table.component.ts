import { Component, EventEmitter } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ClassType } from 'class-transformer/ClassTransformer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { plainToClass } from 'class-transformer';
import { DefaultParams } from '../default-classes';


@UntilDestroy()
@Component({
  template: ``
})
/**
 * Базовый табличный класс, для быстрого доступа к зполнению таблицы, сортировке и пагинации через запросы на сервер
 * Пример:
 * - `export class AccountsTableComponent extends BaseTableComponent<AccountApi> implements OnChanges {`
 * -  `@Input() accounts: AccountApi[];`
 * -  `@Input() params: AccountsParams;`
 * -  `@Output() paramsChange: EventEmitter<AccountsParams> = new EventEmitter<AccountsParams>();`
 * -  `@ViewChild(MatSort) sort: MatSort;`
 * -  `@ViewChild(MatPaginator) paginator: MatPaginator;`
 * -  `displayedColumns: string[] = AccountDisplayedColumns;`
 * -  `ngOnChanges(changes: SimpleChanges): void {`
 * -    `if (isOnChanges(changes.accounts)) {`
 * -      this.prepareTable(this.accounts);
 * -    `}`
 * ...
 */
export class BaseTableComponent<T> {
  /** Индикатор начала сортировки */
  sortStarted: boolean = false;
  /** Параметры для запросов на сервис - любые фильтры + ordering и paginationOption (limit, offset, length) */
  params: DefaultParams;
  /** Эмиттер для изменения параметров */
  paramsChange: EventEmitter<DefaultParams>;
  /** Сортировка, если нужно ее подключить:
   * - в компоненте должен быть ViewChild(MatSort) sort: MatSort;
   * - в шаблоне у mat-table ячеек должны стоять нужные для сортировки метки
   */
  sort: MatSort;
  /** Пагинатор, если нужно его подключить:
   * - в компоненте должен быть ViewChild(MatPaginator) paginator: MatPaginator;
   * - в шаблоне должен быть `<mat-paginator ...></mat-paginator>`
   */
  paginator: MatPaginator;
  /** MatTableDataSource`<Здесь указываем класс, с которым работаем в компоненте>` */
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();
  /** Вычисляет название колонки в зависимости от сортировки указанной в свойстве ordering:
   * - '-created' => 'created';
   * - 'name' => 'name';
   */
  get sortActive(): string {
    if (this.params && this.params.ordering) {
      return this.params.ordering.slice(0, 1) === '-' ? this.params.ordering.slice(1) : this.params.ordering;
    }

    return null;
  }
  /** Вычисляет направление стрелочки у сортируемой колонки в зависимости от сортировки указанной в свойстве ordering:
   * - '-created' => 'desc';
   * - 'name' => 'asc';
   */
  get sortDirection(): 'asc' | 'desc' | '' {
    if (this.params && this.params.ordering) {
      return this.params.ordering.slice(0, 1) === '-' ? 'desc' : 'asc';
    }

    return '';
  }
  /** Вычисляет стартовый индекс для страницы через кол-во отображаемых на странице элементов и номера страницы:
   * - Например, в таблице 20 элементов на странице и на 3 странице мы получим индекс для первого элемента - 61;
   * - Например, в таблице 50 элементов на странице и на 6 странице мы получим индекс для первого элемента - 301;
   */
  get startIndex(): number {
    return this.paginator ? this.paginator.pageSize * this.paginator.pageIndex + 1 : 1;
  }
  /** Вычисляет отправляемый на сервер ordering через сортируемую колонку и направление:
   * - 'name' и 'desc' => '-name';
   * - 'created' и 'asc' => 'created';
   */
  get ordering(): string {
    return this.sort.direction === 'desc' ? `-${this.sort.active}` : this.sort.active;
  }
  /** Вычисляет limit и offset для paginationOption через pageSize и pageIndex у paginator и
   * эмитит параметры родительскому компоненту
   */
  paginatorClicked(): void {
    this.params.paginationOption.limit = this.paginator.pageSize;
    this.params.paginationOption.offset = this.paginator.pageIndex * this.paginator.pageSize;

    this.paramsChange.emit(this.params);
  }
  /** Метод для работы с несериализованным списком элементов, который нужно привести к классу.
   * Передаем список и нужный класс, получаем уже сериализованный список в ответ;
   * Заполняем таблицу элементами;
   * Проверяем сортировку и, если она есть, подписываемся на изменения.
   */
  prepareTableAndData(items: T[], cls: ClassType<T>): T[] {
    const classItems: T[] = plainToClass(cls, items);
    this.prepareDataSource(classItems);
    this.getSortSubscription();
    return classItems;
  }
  /** Метод для работы с списком элементов, который нужно вставить в таблицу;
   * Заполняем таблицу элементами;
   * Проверяем сортировку и, если она есть, подписываемся на изменения.
   */
  prepareTable(items: T[]): void {
    this.prepareDataSource(items);
    this.getSortSubscription();
  }
  /** Заполняем список элментов и сортировку */
  prepareDataSource(classItems: T[]): void {
    this.dataSource.data = classItems;
    this.dataSource.sort = this.sort;
  }
  /** Подписываемся на изменения сортировки и обрабатываем эти изменения */
  getSortSubscription(): void {
    this.runSort()
      .pipe(untilDestroyed(this))
      .subscribe(() => this.prepareParams());
  }
  /** Возвращаем изменения сортировки */
  runSort(): EventEmitter<Sort> {
    if (this.sortStarted || !this.sort) {
      return new EventEmitter<Sort>();
    }
    this.sortStarted = true;

    return this.sort.sortChange;
  }
  /** Меняем параметры для сервера и эмитим их родительскому компоненту */
  prepareParams(): void {
    this.params.ordering = this.ordering;
    this.params.paginationOption.limit = this.paginator.pageSize;
    this.params.paginationOption.offset = 0;
    this.paramsChange.emit(this.params);
  }
}
