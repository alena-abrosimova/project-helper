import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEntityDirective } from './get-entity.directive';



@NgModule({
  declarations: [GetEntityDirective],
  imports: [
    CommonModule
  ],
  exports: [GetEntityDirective]
})
export class GetEntityModule { }
