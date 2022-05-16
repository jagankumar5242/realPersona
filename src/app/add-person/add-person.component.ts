import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      firstname:[''],
      lastname:[''],
      gender:[''],
      age:[''],
      location:[''],
      occupation:[''],
      image:[''],
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


    //  ulodeFile(event:any){
    //    if(event.target.files){
    //      var reader = new FileReader()
    //      reader.readAsDataURL(event.target.files[0])
    //      reader.onload =(event:any)=>{
    //        this.url = event.target.results
    //      }
    //    }
    //  }

     // addPhoto(event:any){
    //    this.addperson.addPhoto(event).subscribe(res=>{
    //      console.log(res)
    //    },err=>{
          
    //    })
    //  }
}
