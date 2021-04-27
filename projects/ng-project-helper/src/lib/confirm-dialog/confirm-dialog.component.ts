import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogData } from '../classes/confirmDialogData';


@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
/** Диалог для получения ответов на простые сообщения,
 * поддерживает HTML-разметку в message, при нажатии на кнопку
 * "Подтверждения" закрывает диалог с ответом "true",
 * а при нажатии на кнопку "Отклонения" - закрывает с ответом "false"
 */
export class ConfirmDialogComponent {
  @HostListener('window:keyup.esc') onKeyUp(): void {
    this.dialogRef.close(false);
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }
}
