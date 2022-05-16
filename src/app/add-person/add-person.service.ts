import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPersonService {
   private url:string="http://199.34.21.254/persona/persona"
   private url2:string="http://199.34.21.254/persona/upload"
  constructor(private http: HttpClient) { }

  addData(payLoad:any):Observable<any[]>{
    return this.http.post<any[]>(this.url,payLoad)
  }
  uplodeFile(payLoad:any):Observable<any[]>{
    return this.http.post<any[]>(this.url2,payLoad)
  }
}
