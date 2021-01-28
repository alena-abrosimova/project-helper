import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ControlsConfig } from './controlsConfig';

class FormOpts {
  onlySelf?: boolean;
  emitEvent?: boolean;
}

class FormOnlySelfOpts {
  onlySelf?: boolean;
}

export class BaseForm {
  cardForm: FormGroup;

  get formValid(): boolean {
    return this.cardForm.valid;
  }

  get formValue(): any {
    return this.cardForm.value;
  }

  get formPristine(): boolean {
    return this.cardForm.pristine;
  }

  get formEnabled(): boolean {
    return this.cardForm.enabled;
  }

  get formDisabled(): boolean {
    return this.cardForm.disabled;
  }

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

  setValue<T>(name: string, value: T, opts?: FormOpts): void {
    this.control(name).setValue(value, opts);
  }

  clear(name: string, opts?: FormOpts): void {
    this.control(name).reset(opts);
    this.control(name).markAsTouched(opts);
  }

  enable(name: string, opts?: FormOpts): void {
    this.control(name).enable(opts);
  }

  enabled(name: string): boolean {
    return this.control(name).enabled;
  }

  disabled(name: string): boolean {
    return this.control(name).disabled;
  }

  disable(name: string, clear: boolean = false, opts?: FormOpts): void {
    this.control(name).disable(opts);
    if (clear) {
      this.control(name).reset(null, opts);
    }
  }

  resetForm<T>(clearValue?: T, opts?: FormOpts): void {
    this.cardForm.reset(clearValue, opts);
  }

  enableForm(opts?: FormOpts): void {
    this.cardForm.enable(opts);
  }

  disableForm<T>(clearValue?: T, opts?: FormOpts): void {
    this.cardForm.disable(opts);
    if (clearValue) {
      this.cardForm.patchValue(clearValue, opts);
    }
  }

  patchForm<T>(value: T, opts?: FormOpts): void {
    this.cardForm.patchValue(value, opts);
  }

  markFormAsPristine(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsPristine(opts);
  }

  markFormAsDirty(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsDirty(opts);
  }

  markFormAsTouched(opts?: { onlySelf?: boolean; }): void {
    this.cardForm.markAsTouched(opts);
  }

  markFormAsUntouched(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsUntouched(opts);
  }

  markFormAllAsTouched(): void {
    this.cardForm.markAllAsTouched();
  }

  markFormAsPending(opts?: FormOpts): void {
    this.cardForm.markAsPending(opts);
  }
}
