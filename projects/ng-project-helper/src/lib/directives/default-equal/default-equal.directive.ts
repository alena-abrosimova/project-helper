import { Directive, Host } from '@angular/core';
import { MatSelect } from '@angular/material/select';


@Directive({
  selector: '[defaultEqual]'
})
/** Директива для `<mat-select></mat-select>`,
 * заменяет [compareWith]="defaultEqual" и объявление defaultEqual в компоненте.
 * Подходит для случаев, когда в <mat-option [value]="..."> вкладывается объект
 */
export class DefaultEqualDirective<T> {

  constructor(@Host() private select: MatSelect) {
    select.compareWith = this.defaultEqual;
  }

  defaultEqual(dir1: T, dir2: T): boolean {
    return dir1 && dir2 && dir1['id'] === dir2['id'];
  }
}
