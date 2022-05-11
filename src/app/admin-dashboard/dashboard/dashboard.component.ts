import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList:any;
  public users: any=[];
  // [{
  //   firstname : 'charan',
  //   lastname : 'Reddy',
  //   gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
  //   upBy : 'king', upOn : '28/4/1999' 
    
  // }];
  
  constructor(private usersService:UsersService) {
    this.usersService.getUsers().subscribe(result =>{
      this.userList=result;
    });
   }

  ngOnInit() {
    this.usersService.getUsers().subscribe((res:any)=> {
    this.users = res.data;
     });
  }
}
