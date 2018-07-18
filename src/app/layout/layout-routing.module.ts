import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      { path: 'network/:id', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'network', loadChildren: './content/content.module#ContentModule' },
      { path: '', redirectTo: 'network' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LayoutRoutingModule { }
