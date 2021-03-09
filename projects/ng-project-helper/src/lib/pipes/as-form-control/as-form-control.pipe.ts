import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'asFormControl'
})
export class AsFormControlPipe implements PipeTransform {
  /**
   * Возвращает AbstractControl как FormControl;
   * Этот пайп для удобства разработчикам:
   * - убирает ошибку из IDE "Type AbstractControl is not assignable to type FormControl"
   * - предоставляет доступ к свойствам FormControl
   */
  transform(value: AbstractControl): FormControl {
    return value as FormControl;
  }
}
