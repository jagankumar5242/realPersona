import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()

export class backendInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('----------',req);
        
        const url = "http://199.34.21.254";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTIyNjU2NzYsImlkIjoiMjAiLCJ1c2VybmFtZSI6InNhdHlhZ3ZucyJ9.ZkSuf6EjRqSqd3sjqzAszIcEsPcWV4RWCMJWmNQ3TfU"
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', token);
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('Access-Control-Allow-Headers', '*');
        //headers = headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        req = req.clone({
            url: url + '/' + req.url,
            headers: headers
        })
        console.log(req);
        

        return next.handle(req).pipe(
            tap(
            (event:HttpEvent<any>) => {
                if(event instanceof HttpResponse) {}},
                (error:any) =>{
                    if(error instanceof HttpErrorResponse){
                        // Handle error message here 
                    if(error.status===401){
                        this.router.navigate(['/login'])
                    }
                }
            }
        ))
    }  
}