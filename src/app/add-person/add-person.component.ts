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
   message=false;
   fileDetails: any;
   imageURL:any;
    
    
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
  close(){
    this.fileDetails.reset(this.imageURL);
  }

  addData(data: any){ 
    this.addperson.addData(data).subscribe(res=>{
       //console.log(res)
       this.message=true;
       //this.publishForm.reset();
       this.routerref.navigate(['/dashbord']);
    }, err=>{
       
    })
    // console.log(this.PublishForm,data)
   }
    
    back(): void {
      this.routerref.navigate(['/dashbord']);
   }

   resetForm(){
     this.publishForm.reset();
     this.routerref.navigate(['/dashbord']);
   }

     uplodeFile(event: any){
       const mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            //this.message = "Only images are supported.";
            return;
        }

        const reader = new FileReader();
        this.fileDetails = event.target.files[0]
        reader.readAsDataURL(event.target.files[0]); 
        reader.onload = (_event) => { 
            this.imageURL = reader.result;  
            this.addperson.uplodeImage(event).subscribe(res=>{
              console.log(res)
            },err=>{
               
            })
        }  
     }

     deletePerson(data:any){
       this.addperson.deletePerson(data).subscribe(res=>{
         console.log(res)
       },err=>{

       })
      // console.log('delete');
     }
    //  uplodeImage(data:any){
    //    this.addperson.uplodeImage(data).subscribe(res=>{
    //      console.log(res)
    //    },err=>{
          
    //    })
    //  }
     
  }


     