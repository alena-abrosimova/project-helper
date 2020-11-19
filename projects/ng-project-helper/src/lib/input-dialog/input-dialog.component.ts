import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { InputDialogData } from '../models/inputDialogData';

@Component({
  selector: 'input-dialog',
  templateUrl: './input-dialog.component.html'
})
export class InputDialogComponent {
  @HostListener('window:keyup.esc') onKeyUp(): void {
    this.dialogRef.close();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: InputDialogData,
              private dialogRef: MatDialogRef<InputDialogComponent>) {
  }
}
