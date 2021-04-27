import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { CustomOption } from '../classes/customOption';


@Component({
  selector: 'edited-option',
  templateUrl: './edited-option.component.html',
  providers: [{provide: CustomOption, useExisting: EditedOptionComponent}]
})
/** Компонент для добавления к mat-option кнопки редактирования,
 * при клике на которую в itemSubject передается значение из value.
 * Удобно обрабатывать директивой и уже непосредственно в приложении
 * писать свою логику - например вызывать необходимый диалог с формой редактирования;
 */
export class EditedOptionComponent<T> implements CustomOption<T> {
  @Input() value: T;

  itemSubject: Subject<T> = new Subject<T>();

  setItemSubject(): void {
    this.itemSubject.next(this.value);
  }
}
