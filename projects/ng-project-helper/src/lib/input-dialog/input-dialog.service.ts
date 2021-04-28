import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { InputDialogComponent } from './input-dialog.component';
import { InputDialogData } from '../classes/inputDialogData';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {
  constructor(private dialog: MatDialog) {
  }
  /**
   * Метод открывает диалог, передает в него редактируемое значение и после закрытия отдает уже измененное значение.
   */
  openWithResult(data: InputDialogData, config?: MatDialogConfig<InputDialogComponent>): Observable<string> {
    return this.dialog.open<InputDialogComponent>(InputDialogComponent, {data, ...config})
      .afterClosed();
  }
}
