import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule }      from '../dashboard/dashboard.module';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent }     from './content.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    DashboardModule
  ],
  declarations: [
    ContentComponent
  ]
})
export class ContentModule { }
