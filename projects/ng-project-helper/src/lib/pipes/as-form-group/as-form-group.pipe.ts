import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';


@Pipe({
  name: 'asFormGroup'
})
/**
 * Возвращает AbstractControl как FormGroup;
 * Этот пайп для удобства разработчикам:
 * - убирает ошибку из IDE "Type AbstractControl is not assignable to type FormGroup"
 * - предоставляет доступ к свойствам FormGroup
 */
export class AsFormGroupPipe implements PipeTransform {
  transform(value: AbstractControl): FormGroup {
    return value as FormGroup;
  }
}
