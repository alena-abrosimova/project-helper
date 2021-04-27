/** Класс для передачи данных в InputDialog.data
 * - title: заголовок для диалога, необязательное
 * - value?: значение, передаваемое в input-поле, необязательное
 * - label?: лэйбл для input-поля, необязательное, по умолчанию 'Наименование'
 * - buttonTitle?: название для кнопки "подтверждения", необязательное, по умолчанию 'Сохранить'
 * - cancelButtonTitle?: название для кнопки "отклонения", необязательное, по умолчанию 'Отмена'
 */

export class InputDialogData {
  constructor(public title: string,
              public value?: string,
              public label: string = 'Наименование',
              public buttonTitle: string = 'Сохранить',
              public cancelButtonTitle: string = 'Отмена') {
  }
}
