import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UpArrowComponent } from './up-arrow.component';
import { DownArrowComponent } from './down-arrow.component';
import { CounterWidgetComponent } from './counter-widget/counter-widget.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    UpArrowComponent,
    DownArrowComponent,
    DashboardComponent,
    CounterWidgetComponent
  ]
})
export class DashboardModule { }

