import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  PublishForm=new FormGroup({
   
  })
  constructor(private routerref:Router ) { }

  ngOnInit(): void {
  }
  addData(){

  }
    
    back(): void {
      this.routerref.navigate(['/dashbord']);
   }
}
