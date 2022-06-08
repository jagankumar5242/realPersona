import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authservice:AuthService, private routeref:Router){}
  canActivate(){
    if(this.authservice.isloggedin()){
      return true;
    }else{
      this.routeref.navigate(['/auth']);
      return false;
    }
  }
}
 
