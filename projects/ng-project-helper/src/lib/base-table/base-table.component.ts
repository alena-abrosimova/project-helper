import { Component, EventEmitter } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ClassType } from 'class-transformer/ClassTransformer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { plainToClass } from 'class-transformer';

import { PaginationOption } from '../models/paginationOptions';


export class DefaultParams {
  [key: string]: any;

  ordering?: string;
  paginationOption: PaginationOption;
}

@UntilDestroy()
@Component({
  template: ``
})

export class BaseTableComponent<T> {
  sortStarted: boolean = false;
  params: DefaultParams;
  paramsChange: EventEmitter<DefaultParams>;

  sort: MatSort;
  paginator: MatPaginator;

  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  get sortActive(): string {
    if (this.params && this.params.ordering) {
      return this.params.ordering.slice(0, 1) === '-' ? this.params.ordering.slice(1) : this.params.ordering;
    }

    return null;
  }

  get sortDirection(): 'asc' | 'desc' | '' {
    if (this.params && this.params.ordering) {
      return this.params.ordering.slice(0, 1) === '-' ? 'desc' : 'asc';
    }

    return '';
  }

  get startIndex(): number {
    return this.paginator ? this.paginator.pageSize * this.paginator.pageIndex + 1 : 1;
  }

  get ordering(): string {
    return this.sort.direction === 'desc' ? `-${this.sort.active}` : this.sort.active;
  }

  paginatorClicked(): void {
    this.params.paginationOption.limit = this.paginator.pageSize;
    this.params.paginationOption.offset = this.paginator.pageIndex * this.paginator.pageSize;

    this.paramsChange.emit(this.params);
  }

  prepareTableAndData(items: T[], cls: ClassType<T>): T[] {
    const classItems: T[] = plainToClass(cls, items);
    this.prepareDataSource(classItems);
    this.getSortSubscription();
    return classItems;
  }

  prepareTable(items: T[]): void {
    this.prepareDataSource(items);
    this.getSortSubscription();
  }

  prepareDataSource(classItems: T[]): void {
    this.dataSource.data = classItems;
    this.dataSource.sort = this.sort;
  }

  getSortSubscription(): void {
    this.runSort()
      .pipe(untilDestroyed(this))
      .subscribe(() => this.prepareParams());
  }

  runSort(): EventEmitter<Sort> {
    if (this.sortStarted || !this.sort) {
      return new EventEmitter<Sort>();
    }
    this.sortStarted = true;

    return this.sort.sortChange;
  }

  prepareParams(): void {
    this.params.ordering = this.ordering;
    this.params.paginationOption.limit = this.paginator.pageSize;
    this.params.paginationOption.offset = 0;
    this.paramsChange.emit(this.params);
  }
}
