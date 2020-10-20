import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { EditedOptionComponent } from './edited-option.component';
import { StopPropagationModule } from '../directives/stop-propagation/stop-propagation.module';


@NgModule({
  declarations: [EditedOptionComponent],
  imports: [
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    StopPropagationModule
  ],
  exports: [EditedOptionComponent]
})
export class EditedOptionModule {
}
