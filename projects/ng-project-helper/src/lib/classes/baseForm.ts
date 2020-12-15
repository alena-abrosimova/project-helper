import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ControlsConfig } from './controlsConfig';


export class BaseForm {
  cardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  initForm(config: ControlsConfig): FormGroup {
    return this.formBuilder.group(config);
  }

  formValid(): boolean {
    return this.cardForm.valid;
  }

  formValue(): any {
    return this.cardForm.value;
  }

  formPristine(): boolean {
    return this.cardForm.pristine;
  }

  control(name: string): AbstractControl {
    return this.cardForm.get(name);
  }

  hasValue(name: string): boolean {
    return !!this.control(name).value;
  }

  canClear(name: string): boolean {
    return !!this.control(name).value && this.enabled(name);
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

  enable(name: string): void {
    this.control(name).enable();
  }

  enabled(name: string): boolean {
    return this.control(name).enabled;
  }

  disabled(name: string): boolean {
    return this.control(name).disabled;
  }

  disable(name: string, clear: boolean = false): void {
    this.control(name).disable();
    if (clear) {
      this.control(name).reset();
    }
  }
}
