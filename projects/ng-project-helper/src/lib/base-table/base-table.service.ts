import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { SimpleHttpService } from '../servises/simple-http.service';


@Injectable({
  providedIn: 'root'
})
export class BaseTableService {

  constructor(private confirmDialogService: ConfirmDialogService,
              private httpService: SimpleHttpService,
              private dialog: MatDialog) { }
}
