import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';


import { MultiOptionComponent } from './multi-option.component';


@NgModule({
  declarations: [MultiOptionComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    FlexModule,
    MatButtonModule,
  ],
  exports: [MultiOptionComponent]
})
export class MultiOptionModule { }
