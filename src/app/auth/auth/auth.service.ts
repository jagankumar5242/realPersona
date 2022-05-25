import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://199.34.21.254/persona/login";
  constructor(private http: HttpClient ) { }

  login(payLoad: any):Observable<any[]>{
    // const URL = "persona/login";
    return this.http.post<any[]>(this.url, payLoad);
  }
}
  