import { NgModule } from '@angular/core';

import { DefaultEqualDirective } from './default-equal.directive';


@NgModule({
  declarations: [DefaultEqualDirective],
  exports: [DefaultEqualDirective]
})

export class DefaultEqualModule {
}
