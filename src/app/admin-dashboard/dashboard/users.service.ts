import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { userDetails } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient) { }

  getUsers(): Observable<any>
  {
    const URL = 'persona/users'
    return this.http.get<any>(URL);
    
  } 
}
