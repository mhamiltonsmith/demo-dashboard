import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeWidgetComponent } from './change-widget.component';
import { UpArrowComponent } from './arrows-widget/up-arrow.component';
import { DownArrowComponent } from './arrows-widget/down-arrow.component';
import { ArrowsWidgetComponent } from './arrows-widget/arrows-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeWidgetComponent,
    UpArrowComponent,
    DownArrowComponent,
    ArrowsWidgetComponent
  ],
  exports: [
    ChangeWidgetComponent
  ]
})
export class ChangeWidgetModule { }
