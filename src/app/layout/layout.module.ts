import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent }     from './layout.component';
import { LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import { HeaderComponent}      from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
