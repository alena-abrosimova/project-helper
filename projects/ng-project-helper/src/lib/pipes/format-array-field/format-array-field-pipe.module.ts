import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatArrayFieldPipe } from './format-array-field.pipe';



@NgModule({
  declarations: [FormatArrayFieldPipe],
  imports: [
    CommonModule
  ],
  exports: [FormatArrayFieldPipe]
})
export class FormatArrayFieldPipeModule { }
