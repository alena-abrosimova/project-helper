import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDialogComponent } from './input-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputDialogComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        FlexModule,
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        MatInputModule
    ],
  exports: [InputDialogComponent]
})
export class InputDialogModule {
}
