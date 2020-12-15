import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { CustomOption } from '../classes/customOption';


@Component({
  selector: 'edited-option',
  templateUrl: './edited-option.component.html',
  providers: [{provide: CustomOption, useExisting: EditedOptionComponent}]
})
export class EditedOptionComponent<T> implements CustomOption<T> {
  @Input() value: T;

  itemSubject: Subject<T> = new Subject<T>();

  setItemSubject(): void {
    this.itemSubject.next(this.value);
  }
}
