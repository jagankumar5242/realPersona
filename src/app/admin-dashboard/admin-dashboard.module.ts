import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersService } from './dashboard/users.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  providers: [
    UsersService
  ],
})
export class AdminDashboardModule { }
