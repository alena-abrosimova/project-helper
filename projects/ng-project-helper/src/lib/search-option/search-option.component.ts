import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT, MatOptgroup, MatOption, MatOptionParentComponent } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

import { CustomOption } from '../models/customOption';


@Component({
  selector: 'search-option',
  templateUrl: './search-option.component.html',
  providers: [{provide: CustomOption, useExisting: SearchOptionComponent}]
})
export class SearchOptionComponent<T> extends MatOption implements CustomOption<T> {
  @Input() placeholder: string = 'Поиск...';
  @Input() withAdd: boolean = false;
  @Input() control: FormControl;
  @Output() controlChange: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  value: T;

  itemSubject: Subject<T> = new Subject<T>();

  get noOptions(): boolean {
    return this.parent instanceof MatSelect ? !this.parent.options.length : false;
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