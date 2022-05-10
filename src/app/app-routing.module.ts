import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LayoutComponent } from './header/layout/layout.component';
 

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'auth',component:AuthComponent},
  {path:'dashbord',component:DashboardComponent},
  {
    path:'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      )
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingcomponent=[AuthComponent,DashboardComponent]