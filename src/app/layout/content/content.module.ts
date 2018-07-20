import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule }      from '../dashboard/dashboard.module';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent }     from './content.component';
import { ListBoxComponent }     from './list-box/list-box.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    DashboardModule
  ],
  declarations: [
    ContentComponent,
    ListBoxComponent
  ]
})
export class ContentModule { }
