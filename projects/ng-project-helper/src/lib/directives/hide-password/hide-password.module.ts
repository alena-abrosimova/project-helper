import { NgModule } from '@angular/core';

import { HidePasswordDirective } from './hide-password.directive';



@NgModule({
  declarations: [HidePasswordDirective],
  exports: [HidePasswordDirective],
})
export class HidePasswordModule { }
