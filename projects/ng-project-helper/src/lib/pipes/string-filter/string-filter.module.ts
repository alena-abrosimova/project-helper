import { NgModule } from '@angular/core';

import { StringFilterPipe } from './string-filter.pipe';


@NgModule({
  declarations: [StringFilterPipe],
  exports: [StringFilterPipe]
})
export class StringFilterModule {
}
