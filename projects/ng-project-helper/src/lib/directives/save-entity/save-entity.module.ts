import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveEntityDirective } from './save-entity.directive';


@NgModule({
  declarations: [SaveEntityDirective],
  imports: [
    CommonModule
  ],
  exports: [SaveEntityDirective]
})
export class SaveEntityModule {
}
