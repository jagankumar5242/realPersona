import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AuthService } from './auth.service';
 
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
  });
  constructor(private routerref:Router,private authService:AuthService,public formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:['',Validators.required]
    })
  }
    login(){
     this. authService.login()
     .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){
          
        }
      },err=>{
        this.loginForm
        this.routerref.navigate(["dashbord"])
      })
       
      // const loginCredentials = 
      //  this.authService.login().subscribe((res:any )=>{
        
      //  })
      // // console.log(this.loginForm.value);
      // localStorage.setItem('email',this.email);
      // if(this.password=="123"){
      //   this.routerref.navigate(['/dashbord'])
      // }
      }
    }
