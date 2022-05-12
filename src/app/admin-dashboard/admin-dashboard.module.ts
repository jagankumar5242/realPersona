import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    AdminDashboardRoutingModule,

  ],
  providers: [
  ],
})
export class AdminDashboardModule { }
