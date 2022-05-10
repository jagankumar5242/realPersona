import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { userDetails } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  // constructor(private http : HttpClient) { }

  // getUsers(): Observable<userDetails[]>
  // {
  //   return this.http.get<userDetails[]>('http://199.34.21.254/persona/users');
  // }
}
