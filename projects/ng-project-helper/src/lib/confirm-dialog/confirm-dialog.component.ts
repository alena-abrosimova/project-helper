import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogData } from '../models/confirmDialogData';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @HostListener('window:keyup.esc') onKeyUp(): void { this.dialogRef.close(false); }

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }
}
