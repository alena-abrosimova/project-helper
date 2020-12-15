import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ControlsConfig } from './controlsConfig';


export class BaseForm {
  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  initForm(config: ControlsConfig): FormGroup {
    return this.formBuilder.group(config);
  }

  control(name: string): AbstractControl {
    return this.cardForm.get(name);
  }

  hasValue(name: string): boolean {
    return !!this.control(name).value;
  }

  errors(name: string): ValidationErrors {
    return this.control(name).errors;
  }

  touched(name: string): boolean {
    return this.control(name).touched;
  }

  getValue<T>(name: string): T {
    return this.control(name).value;
  }

  setValue<T>(name: string, value: T): void {
    this.control(name).setValue(value);
  }

  clear(name: string): void {
    this.control(name).reset();
    this.control(name).markAsTouched();
  }
}
