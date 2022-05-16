import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { userDetails } from './user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = 'http://199.34.21.254/persona/personas/0/10';
  constructor(private http : HttpClient) { }

  getUsers(): Observable<userDetails[]>
  {
    // const URL = 'persona/users'
   
    return this.http.get<userDetails[]>(this.URL);
    
  } 
  // export class EmployeeService {
  //   private url: string= "https://dummy.restapiexample.com/api/v1/employees";
  //   constructor(private http : HttpClient){ }
  
  //   getEmployes(): Observable<IEmployee[]>
  //   {
  //     return this.http.get<IEmployee[]>(this.url);
  //   }
}
