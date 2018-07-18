import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule }            from '@progress/kendo-angular-charts';
import { SparklineModule }         from '@progress/kendo-angular-charts';
import { DashboardRoutingModule }  from './dashboard-routing.module';

import 'hammerjs';

import { DashboardComponent }    from './dashboard.component';
import { AccordionComponent }    from './accordion/accordion.component';
import { AccordionColComponent } from './accordion/accordion-col/accordion-col.component';
import { AccordionRowComponent } from './accordion/accordion-col/accordion-row/accordion-row.component';
import { StatsBoxComponent }     from './stats-box/stats-box.component';
import { TextBoxComponent }      from './text-box/text-box.component';
import { ChangeWidgetModule }    from './change-widget/change-widget.module';
import { MapWidgetComponent }    from './map-widget/map-widget.component';
import { ListBoxComponent }      from './list-box/list-box.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChangeWidgetModule,
    ChartsModule,
    SparklineModule
  ],
  declarations: [
    AccordionColComponent,
    AccordionRowComponent,
    DashboardComponent,
    AccordionComponent,
    StatsBoxComponent,
    TextBoxComponent,
    MapWidgetComponent,
    ListBoxComponent
  ],
  exports: [
    MapWidgetComponent
  ]
})
export class DashboardModule { }

