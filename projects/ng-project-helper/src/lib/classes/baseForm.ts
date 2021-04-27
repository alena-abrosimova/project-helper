import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ControlsConfig } from './controlsConfig';

/**
 * @param opts Configure options that control how the control propagates changes and
 * emits events when marked as untouched
 * * `onlySelf`: When true, mark only this control. When false or not supplied,
 * marks all direct ancestors. Default is false.
 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
 * `valueChanges`
 * observables emit events with the latest status and value when the control is enabled.
 * When false, no events are emitted.
 */
class FormOpts {
  onlySelf?: boolean;
  emitEvent?: boolean;
}

class FormOnlySelfOpts {
  onlySelf?: boolean;
}

/** Базовый класс для работы с формой в компоненте (поддерживает одну форму cardForm) */
export class BaseForm {
  /** Сама форма */
  cardForm: FormGroup;

  /** Возвращает true, если форма имеет статус VALID, иначе false */
  get formValid(): boolean {
    return this.cardForm.valid;
  }

  /** Возвращает cardForm.value */
  get formValue(): any {
    return this.cardForm.value;
  }

  /** Возвращает cardForm.getRawValue - то же самое, что и value, но возвращает значение и задизабленных контролов */
  get formRawValue(): any {
    return this.cardForm.getRawValue();
  }

  /** Возвращает true, если форма не была изменена пользователем через UI, иначе false */
  get formPristine(): boolean {
    return this.cardForm.pristine;
  }

  /** Возвращает true, если форма активна (незаблокирована), иначе false */
  get formEnabled(): boolean {
    return this.cardForm.enabled;
  }

  /** Возвращает true, если форма неактивна (заблокирована), иначе false */
  get formDisabled(): boolean {
    return this.cardForm.disabled;
  }

  /** для наследования нужно будет в конструкторе объявить formBuilder: FormBuilder и передаеть его в super() */
  constructor(private formBuilder: FormBuilder) {
  }

  /** Метод для инициализирования формы => this.cardForm = this.initForm(config) */
  initForm(config: ControlsConfig): FormGroup {
    return this.formBuilder.group(config);
  }

  /** Отдает контрол с искомым именем, если контрола с таким именем не будет в форме - будет undefined */
  control(name: string): AbstractControl {
    return this.cardForm.get(name);
  }

  /** Проверяет наличие значение в контроле */
  hasValue(name: string): boolean {
    return !!this.control(name).value;
  }

  /** Проверяет наличие значение в контроле и активен ли он (например для того, чтобы проверить,
   * можем ли мы показывать у контрола кнопку сброса)
   */
  canClear(name: string): boolean {
    return !!this.control(name).value && this.enabled(name);
  }
  /** Отдает список ошибок контрола */
  errors(name: string): ValidationErrors {
    return this.control(name).errors;
  }
  /** Возвращает true, если контрол был "затронут" пользователем через UI, иначе false */
  touched(name: string): boolean {
    return this.control(name).touched;
  }
  /** Отдает значение контрола */
  getValue<T>(name: string): T {
    return this.control(name).value;
  }
  /** Присваивает значение контролу */
  setValue<T>(name: string, value: T, opts?: FormOpts): void {
    this.control(name).setValue(value, opts);
  }
  /** Очищает значение контрола и помечает его "тронутым пользователем через UI" */
  clear(name: string, opts?: FormOpts): void {
    this.control(name).reset(opts);
    this.control(name).markAsTouched(opts);
  }
  /** Делает контрол активным (разблокированным) */
  enable(name: string, opts?: FormOpts): void {
    this.control(name).enable(opts);
  }
  /** Возвращает true, если контрол активен (незаблокирован), иначе false */
  enabled(name: string): boolean {
    return this.control(name).enabled;
  }
  /** Возвращает true, если контрол неактивен (заблокирован), иначе false */
  disabled(name: string): boolean {
    return this.control(name).disabled;
  }
  /** Делает контрол неактивным (заблокированным), очищает значение, если приходит clear */
  disable(name: string, clear: boolean = false, opts?: FormOpts): void {
    this.control(name).disable(opts);
    if (clear) {
      this.control(name).reset(null, opts);
    }
  }
  /** Очищает значение формы */
  resetForm<T>(clearValue?: T, opts?: FormOpts): void {
    this.cardForm.reset(clearValue, opts);
  }
  /** Делает форму активной (разблокированной) */
  enableForm(opts?: FormOpts): void {
    this.cardForm.enable(opts);
  }
  /** Делает форму неактивной (заблокированной), патчит значение, если приходит clearValue */
  disableForm<T>(clearValue?: T, opts?: FormOpts): void {
    this.cardForm.disable(opts);
    if (clearValue) {
      this.cardForm.patchValue(clearValue, opts);
    }
  }
  /** Заполняет форму объектом */
  patchForm<T>(value: T, opts?: FormOpts): void {
    this.cardForm.patchValue(value, opts);
  }
  /** Помечает форму "неизмененной пользователем через UI" */
  markFormAsPristine(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsPristine(opts);
  }
  /** Помечает форму "измененной пользователем через UI" */
  markFormAsDirty(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsDirty(opts);
  }
  /** Помечает форму "тронутой пользователем через UI" */
  markFormAsTouched(opts?: { onlySelf?: boolean; }): void {
    this.cardForm.markAsTouched(opts);
  }
  /** Помечает форму "нетронутой пользователем через UI" */
  markFormAsUntouched(opts?: FormOnlySelfOpts): void {
    this.cardForm.markAsUntouched(opts);
  }
  /** Помечает форму "тронутой пользователем через UI" */
  markFormAllAsTouched(): void {
    this.cardForm.markAllAsTouched();
  }
  /** Помечает форму "ожидающей ответа от асинхронных валидаторов" */
  markFormAsPending(opts?: FormOpts): void {
    this.cardForm.markAsPending(opts);
  }
}
