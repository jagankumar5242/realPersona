import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
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
   editObj = {firstname: 'Jagan', lastname: 'kumar',gender:'male',age:'24',location:'Karnataka',occupation:'Farmer'};
   isEdit = false;
   location: string[] = ['Andhra pradesh','Karnataka','Tamil nadu','Kerala','Telangana','Maharastra'];  
   occupation: string[] = ['Farmer','Doctor',' Engineer','student','Manger','Teacher'];  
  
  
  constructor(private routerref:Router,
     public formbuilder:FormBuilder, 
     public addperson:AddPersonService,
     private router:ActivatedRoute) {
       this.router.queryParams.subscribe((res: any) =>{
         this.loadForm();
         if(res && res.isEdit){
           this.isEdit = true;
            this.publishForm.patchValue(this.editObj);
            this.fileDetails = {};
           this.imageURL = 'https://res.cloudinary.com/demo/image/upload/sample.gif';
           this.publishForm.updateValueAndValidity();
         }
         
       })
      }

  ngOnInit(): void {
    
  }
  loadForm(){
    this.publishForm=this.formbuilder.group({
      firstname:['',Validators.compose([Validators.required])],
      lastname:['',Validators.compose([Validators.required])],
      gender:['',Validators.compose([Validators.required])],
      age:['',Validators.compose([Validators.required])],
      location:['',Validators.compose([Validators.required])],
      occupation:['',Validators.compose([Validators.required])],
    });
  }
  close(){
    this.fileDetails = undefined;
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
       
       updateperson(){
        this.routerref.navigate(['/dashbord']);
        
        //  const data = {};
        //  this.addperson.updatePerson(data).subscribe(res =>{
        //    console.log(res)
        //    this.routerref.navigate(['/dashbord']);
        //  })
       }

}
     
    //  uplodeImage(data:any){
    //    this.addperson.uplodeImage(data).subscribe(res=>{
    //      console.log(res)
    //    },err=>{
          
    //    })
    //  }
     
  


     