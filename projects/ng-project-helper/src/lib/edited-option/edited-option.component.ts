import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { CustomOption } from '../classes/customOption';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'edited-option',
  templateUrl: './edited-option.component.html',
  providers: [
    {provide: CustomOption, useExisting: EditedOptionComponent},
    {provide: MatOption, useExisting: EditedOptionComponent},
  ]
})
export class EditedOptionComponent<T> extends MatOption implements CustomOption<T> {
  @Input() value: T;

  itemSubject: Subject<T> = new Subject<T>();

  setItemSubject(): void {
    this.itemSubject.next(this.value);
  }
}
