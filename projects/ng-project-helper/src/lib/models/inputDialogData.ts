export class InputDialogData {
  constructor(public title: string,
              public value?: string,
              public label: string = 'Наименование',
              public buttonTitle: string = 'Сохранить',
              public cancelButtonTitle: string = 'Отмена') {
  }
}
