import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ControlErrorConfig, ControlErrorKey } from './control-error.data';
import { dateToString } from '../../functions/dateToString';
import { isOnChanges } from '../../functions/isOnChanges';


@Directive({
  selector: '[controlError]'
})
export class ControlErrorDirective implements OnChanges {
  @Input() controlError: ValidationErrors;
  @Input() touched: boolean;

  constructor(public elementRef: ElementRef<HTMLElement>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.controlError && !this.controlError.required || this.touched) {
      this.elementRef.nativeElement.textContent = this.getDescriptions();
    }
    if (isOnChanges(changes.touched)) {
      this.elementRef.nativeElement.classList.add('mat-error');
    }
  }

  getDescriptions(): string {
    return this.controlError ? Object.keys(this.controlError).map(key => this.getKeyDescription(key as ControlErrorKey)).join('. ') : '';
  }

  getKeyDescription(key: ControlErrorKey): string {
    switch (key) {
      case 'max':
        return `${ControlErrorConfig[key]}${this.controlError.max.max}`;
      case 'min':
        return `${ControlErrorConfig[key]}${this.controlError.min.min}`;
      case 'maxlength':
        return `${ControlErrorConfig[key]}${this.controlError.maxlength.requiredLength}`;
      case 'minlength':
        return `${ControlErrorConfig[key]}${this.controlError.minlength.requiredLength}`;
      case 'matDatepickerMax':
        return `${ControlErrorConfig[key]}${dateToString(this.controlError.matDatepickerMax.max, 'dd.MM.yyyy')}`;
      case 'matDatepickerMin':
        return `${ControlErrorConfig[key]}${dateToString(this.controlError.matDatepickerMin.min, 'dd.MM.yyyy')}`;
      default:
        return ControlErrorConfig[key];
    }
  }
}
