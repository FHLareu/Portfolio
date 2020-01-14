import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [
    MatTooltipModule,
    BrowserAnimationsModule
  ]
})
export class AngularMaterialModule { }
