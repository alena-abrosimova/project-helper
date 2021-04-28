import { ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT, MatOptgroup, MatOption, MatOptionParentComponent } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';

import { CustomOption } from '../classes/customOption';


@Component({
  selector: 'search-option',
  templateUrl: './search-option.component.html',
  providers: [
    {provide: CustomOption, useExisting: SearchOptionComponent},
    {provide: MatOption, useExisting: SearchOptionComponent}
  ],
})
/** Компонент для добавления в начало списка mat-option c полем для ввода строки и кнопкой "Добавить",
 * при клике на которую в itemSubject передается значение из value.
 * Удобно обрабатывать директивой и уже непосредственно в приложении
 * писать свою логику - например вызывать необходимый диалог с формой добавлениея;
 * А также удобно для фильтрации списка через сервер
 */
export class SearchOptionComponent<T> extends MatOption implements CustomOption<T> {
  @Input() placeholder: string = 'Поиск...';
  @Input() withAdd: boolean = false;

  query: string = '';
  value: T;

  itemSubject: Subject<T> = new Subject<T>();

  get noOptions(): boolean {
    return this.parent instanceof MatSelect ? this.parent.options.length === 1 : false;
  }

  constructor(elementRef: ElementRef<HTMLElement>,
              changeDetectorRef: ChangeDetectorRef,
              @Optional() @Inject(MAT_OPTION_PARENT_COMPONENT) private parent: MatOptionParentComponent,
              @Optional() group: MatOptgroup) {
    super(elementRef, changeDetectorRef, parent, group);
    elementRef.nativeElement.classList.add('system-option', 'top');
  }

  setItemSubject(): void {
    this.itemSubject.next(this.value);
  }
}
