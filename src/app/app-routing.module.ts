import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { LayoutComponent } from './header/layout/layout.component';
import { UserListComponent } from './user-list/user-list.component';
 

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  // {path:'dashbord',component:DashboardComponent},
  // {path:'add-person',component:AddPersonComponent},
  // {path:'user-list',component:UserListComponent},
  {
    path:'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      )
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingcomponent=[AuthComponent,DashboardComponent,AddPersonComponent]