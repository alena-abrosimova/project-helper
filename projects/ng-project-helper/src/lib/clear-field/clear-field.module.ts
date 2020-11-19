import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearFieldComponent } from './clear-field.component';
import { StopPropagationModule } from '../directives/stop-propagation/stop-propagation.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ClearFieldComponent],
  imports: [
    CommonModule,
    StopPropagationModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ClearFieldComponent]
})
export class ClearFieldModule { }
