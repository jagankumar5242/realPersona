import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPersonService {
   private url:string="http://199.34.21.254/persona/persona"  // add new person 
   private url2:string="http://199.34.21.254/persona/upload"   //uplode image
   private url3:string=" http://199.34.21.254/persona/personas"  //delete person
   private url4:string='http://199.34.21.254/persona/personas/65' //update  person
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

  updatePerson(payLoad:any):Observable<any[]>{
      return this.http.put<any[]>(this.url4,payLoad)
  }
}

