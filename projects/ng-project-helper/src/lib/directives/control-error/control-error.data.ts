import { ValidationErrors } from '@angular/forms';


export const ControlErrorConfig: ValidationErrors = {
  required: 'Обязательное поле',
  email: 'Поле должно содержать email',
  maxlength: 'Макс. символов - ',
  minlength: 'Мин. символов - ',
  matDatepickerMin: 'Мин. значение - ',
  matDatepickerMax: 'Макс. значение - ',
  min: 'Мин. значение - ',
  max: 'Макс. значение - ',
  urlPattern: 'Невалидный url',
  datePattern: 'Неверный формат даты',
  pattern: 'Неверный формат',
};

export type ControlErrorKey = 'required' | 'email' | 'maxlength' | 'minlength' | 'matDatepickerMin' | 'matDatepickerMax' | 'min' | 'max'
  | 'urlPattern' | 'pattern';
