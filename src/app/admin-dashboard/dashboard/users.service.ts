import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http'
import { catchError, Observable } from 'rxjs';
import { userDetails } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 // private url = 'http://199.34.21.254/persona/personas/0/10';
  constructor(private http : HttpClient) { }
   public url : string = 'assets/data/userdetails.json';
  getUsers(): Observable<userDetails[]>
  {
    // const URL = 'persona/users'
   
    return this.http.get<userDetails[]>(this.url);
    
  } 
  deletePerson (item: any):Observable<any>
  {
     return this.http.delete<any>(this.url +"/" + item.id);
  }
}
