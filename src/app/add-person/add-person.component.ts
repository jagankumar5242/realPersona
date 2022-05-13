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
   publishForm!: FormGroup;
   progress:number=0;
  constructor(private routerref:Router, public formbuilder:FormBuilder, public addperson:AddPersonService) { }

  ngOnInit(): void {
    this.publishForm=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      gender:[''],
      age:[''],
      location:[''],
      occupation:[''],
      image:[null],
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

    addPhoto(image:any){
       this.addperson.addPhoto(image).subscribe(res=>{
         console.log(res)
       },err=>{
          
       })
     }

     uplodeFile(event: any){
       const file =event.target.files ? event.target.files[0]:'';
       console.log(file);
     }
}
