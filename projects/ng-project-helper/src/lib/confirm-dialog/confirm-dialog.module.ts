import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ConfirmDialogComponent]
})
export class ConfirmDialogModule { }
