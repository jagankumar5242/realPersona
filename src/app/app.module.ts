import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './management/management.component';
import { HeaderModule} from './header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { backendInterceptor } from './interceptors/backened.interceptor';
import { UsersService } from './admin-dashboard/dashboard/users.service';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthService } from './auth/auth/auth.service';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddPersonService } from './add-person/add-person.service';
import { InputTextModule } from "primeng/inputtext";
import { UserListComponent } from './user-list/user-list.component';
import { PopupDailogComponent } from './popup-dailog/popup-dailog.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    AuthComponent,
    AddPersonComponent,
    UserListComponent,
    PopupDailogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
 
    
  ],
  providers: [
    AuthService,
    AddPersonService,
    UsersService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: backendInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]    
})
export class AppModule { }
