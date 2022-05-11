import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ManagementComponent } from './management/management.component';
import { HeaderModule} from './header/header.module';
import { AuthComponent } from './auth/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth/auth.service';
import { AddPersonComponent } from './add-person/add-person.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    AuthComponent,
    AddPersonComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [
    AuthService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
