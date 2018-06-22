import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { UpArrowComponent } from './up-arrow.component';
import { DownArrowComponent } from './down-arrow.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentComponent,
    UpArrowComponent,
    DownArrowComponent
  ]
})
export class ContentModule { }
