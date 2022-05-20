import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPersonService {
   private url:string="http://199.34.21.254/persona/persona"
   private url2:string="http://199.34.21.254/persona/upload"
   private url3:string="http://199.34.21.254/persona/personas"
  constructor(private http: HttpClient) { }

  addData(payLoad:any):Observable<any[]>{
    return this.http.post<any[]>(this.url,payLoad)
  }
  uplodeImage(payLoad:any):Observable<any[]>{
    return this.http.post<any[]>(this.url2,payLoad)
  }

  deletePerson(_payLoad:any):Observable<any[]>{
    return this.http.delete<any[]>(this.url3)
  }
}
