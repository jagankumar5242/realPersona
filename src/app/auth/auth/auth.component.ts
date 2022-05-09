import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email='';
  password='';
  loginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
  });
  constructor(private routerref:Router,private authService:AuthService ) { }

  ngOnInit(): void {
  }
    login(){
      const loginCredentials = 
       this.authService.login().subscribe((res:any )=>{
        
       })
      // // console.log(this.loginForm.value);
      // localStorage.setItem('email',this.email);
      // if(this.password=="123"){
      //   this.routerref.navigate(['/dashbord'])
      // }
      }
    }
