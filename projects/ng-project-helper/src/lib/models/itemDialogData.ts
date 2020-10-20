export class ItemDialogData<T> {
  constructor(public item: T,
              public disabled: boolean,
              public edited: boolean = true) {
  }
}
