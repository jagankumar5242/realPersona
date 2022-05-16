import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AddPersonService } from './add-person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
   publishForm!: FormGroup;
   progress:number=0;
  url: any;
   
  constructor(private routerref:Router, public formbuilder:FormBuilder, public addperson:AddPersonService) { }

  ngOnInit(): void {
    this.publishForm=this.formbuilder.group({
      firstname:['',Validators.compose([Validators.required])],
      lastname:['',Validators.compose([Validators.required])],
      gender:['',Validators.compose([Validators.required])],
      age:['',Validators.compose([Validators.required])],
      location:['',Validators.compose([Validators.required])],
      occupation:['',Validators.compose([Validators.required])],
      image:['',Validators.compose([Validators.required])],
    })
  }

  addData(data: any){ 
    this.addperson.addData(data).subscribe(res=>{
       console.log(res)
    }, err=>{

    })
    // console.log(this.PublishForm,data)
   }
    
    back(): void {
      this.routerref.navigate(['/dashbord']);
   }

   resetForm(){
     this.publishForm.reset();
   }

     uplodeFile(event: any){
       const file =event.target.files ? event.target.files[0]:'';
       console.log(file);
     }

     uplodeFIle(event:any){
       this.addperson.uplodeFile(event).subscribe(res=>{
         console.log(res)
       },err=>{
          
       })
     }

  }


      //  ulodeFile(event:any){
    //    if(event.target.files){
    //      var reader = new FileReader()
    //      reader.readAsDataURL(event.target.files[0])
    //      reader.onload =(event:any)=>{
    //        this.url = event.target.results
    //      }
    //    }
    //  }

