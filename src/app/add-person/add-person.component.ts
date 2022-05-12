import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AddPersonService } from './add-person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
   PublishForm!: FormGroup;
   
  constructor(private routerref:Router, public formbuilder:FormBuilder, public addperson:AddPersonService) { }

  ngOnInit(): void {
    this.PublishForm=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      gender:[''],
      age:[''],
      location:[''],
      occupation:['']
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
     this.PublishForm.reset();
   }
    //  addPhoto(image:any){
    //    this.addperson.addPhoto(image).subscribe(res=>{
    //      console.log(res)
    //    },err=>{
          
    //    })
    //  }
}
