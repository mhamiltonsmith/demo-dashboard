import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionColComponent } from './accordion/accordion-col/accordion-col.component';
import { AccordionRowComponent } from './accordion/accordion-col/accordion-row/accordion-row.component';
import { StatsBoxComponent } from './stats-box/stats-box.component';
import { MapWidgetComponent } from './map-widget/map-widget.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ChangeWidgetModule } from './change-widget/change-widget.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChangeWidgetModule,
    ButtonsModule
  ],
  declarations: [
    AccordionColComponent,
    AccordionRowComponent,
    DashboardComponent,
    AccordionComponent,
    StatsBoxComponent,
    MapWidgetComponent,
    TextBoxComponent,
    EmptyComponent
  ]
})
export class DashboardModule { }

