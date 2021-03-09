import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsFormGroupPipe } from './as-form-group.pipe';



@NgModule({
  declarations: [AsFormGroupPipe],
  imports: [
    CommonModule
  ],
  exports: [AsFormGroupPipe]
})
export class AsFormGroupModule { }
