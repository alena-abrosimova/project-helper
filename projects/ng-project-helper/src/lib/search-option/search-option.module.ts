import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SearchOptionComponent } from './search-option.component';
import { StopPropagationModule } from '../directives/stop-propagation/stop-propagation.module';


@NgModule({
  declarations: [SearchOptionComponent],
  imports: [
    CommonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    StopPropagationModule,
    FormsModule
  ],
  exports: [SearchOptionComponent]
})
export class SearchOptionModule {
}
