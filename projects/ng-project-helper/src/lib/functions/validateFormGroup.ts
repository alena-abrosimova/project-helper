import { FormControl, FormGroup } from '@angular/forms';

/**
 * Метод для проверки валидации FormGroup и внутренних FormGroup.
 */
export function validateFormGroup(formGroup: FormGroup): void {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({onlySelf: true});
    } else if (control instanceof FormGroup) {
      validateFormGroup(control);
    }
  });
}
