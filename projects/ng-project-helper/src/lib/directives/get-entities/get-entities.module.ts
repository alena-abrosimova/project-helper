import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEntitiesDirective } from './get-entities.directive';



@NgModule({
  declarations: [GetEntitiesDirective],
  imports: [
    CommonModule
  ],
  exports: [GetEntitiesDirective]
})
export class GetEntitiesModule { }
