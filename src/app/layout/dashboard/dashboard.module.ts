import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccordionColComponent } from './accordion-col.component';
import { AccordionRowComponent } from './accordion-row.component';
import { UpArrowComponent } from './up-arrow.component';
import { DownArrowComponent } from './down-arrow.component';
import { AccordionComponent } from './accordion.component';
import { ArrowsWidgetComponent } from './arrows-widget.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    AccordionColComponent,
    AccordionRowComponent,
    UpArrowComponent,
    DownArrowComponent,
    DashboardComponent,
    AccordionComponent,
    ArrowsWidgetComponent
  ]
})
export class DashboardModule { }

