import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginatorModule} from 'primeng/paginator';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {CheckboxModule} from 'primeng/checkbox';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogboxComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    AdminDashboardRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    CheckboxModule
  ],
  providers: [
  ],
})
export class AdminDashboardModule { }
