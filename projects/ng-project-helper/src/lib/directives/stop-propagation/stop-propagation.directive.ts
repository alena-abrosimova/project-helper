import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopPropagation]'
})
/** Директива для остановки дальнейших событий после отработки метода, вложенного в (click)
 * в том компоненте, где вызвана эта директива.
 *
 * Практический пример:
 * Если в mat-form-field + mat-select указать `<button matSuffix (click)="clearSelect()">`
 * то после очистки поля, автоматически пойдет цепочка событий дальше, что приведет
 * к открытию списка опций у `<mat-select>` (это дефолтное поведение на любой метод (click)
 * вызыванный внутри mat-select.
 *
 * Но если добавить директиву - `<button matSuffix (click)="clearSelect() stopPropagation">`,
 * то после очистки поля цепочка прервется, и mat-select не будет открываться для пользователя просто так.
 */
export class StopPropagationDirective {
  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.stopPropagation();
  }
}
