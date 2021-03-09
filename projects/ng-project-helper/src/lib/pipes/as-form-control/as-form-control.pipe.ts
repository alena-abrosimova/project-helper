import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'asFormControl'
})
/**
 * Возвращает AbstractControl как FormControl;
 * Этот пайп для удобства разработчикам:
 * - убирает ошибку из IDE "Type AbstractControl is not assignable to type FormControl"
 * - предоставляет доступ к свойствам FormControl
 */
export class AsFormControlPipe implements PipeTransform {
  transform(value: AbstractControl): FormControl {
    return value as FormControl;
  }
}
