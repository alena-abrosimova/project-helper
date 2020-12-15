import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { Observable } from 'rxjs';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogData } from '../classes/confirmDialogData';


export const DeleteConfirmDialogData: ConfirmDialogData
  = new ConfirmDialogData('Вы действительно хотите удалить запись?', 'Предупреждение', 'Удалить', 'Отмена');

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {
  }

  openConfirmDialogWithResult(data: ConfirmDialogData = DeleteConfirmDialogData,
                              config?: MatDialogConfig<ConfirmDialogComponent>): Observable<boolean> {
    return this.dialog.open<ConfirmDialogComponent>(ConfirmDialogComponent, {data, ...config})
      .afterClosed();
  }

  openConfirmDialog(data: ConfirmDialogData = DeleteConfirmDialogData,
                    config?: MatDialogConfig<ConfirmDialogComponent>): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open<ConfirmDialogComponent>(ConfirmDialogComponent, {data, ...config});
  }
}
