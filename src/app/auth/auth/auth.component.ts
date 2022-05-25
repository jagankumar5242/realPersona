
import { assertPlatform, Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
 
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
 
  showPassword=false;
  passwordToggleIcon ='eye';
  // loginForm=new FormGroup({
  // email:new FormControl('',Validators.required),
  // password:new FormControl('',Validators.required),
  // }); 
  loginForm: FormGroup;
  message=true
   msg:any;
    

  constructor(private routerref:Router, public formbuilder:FormBuilder, public auth: AuthService) {

    this.loginForm=this.formbuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required])]
    })
   }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((v)=>{
      this.message=this.loginForm.valid;
    })
  }  
    login(data: any){
      
      this.auth.login(data).subscribe(res =>{
        console.log(res);
       // this.routerref.navigate(["dashbord"])
        
      }, err =>{
          this.msg='user not found';
      })
      }
      
      tagglePassword():void{
        this.showPassword= !this.showPassword;

      }
}
