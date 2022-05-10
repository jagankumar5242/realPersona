import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users: any= [{
    firstname : 'charan',
    lastname : 'Reddy',
    gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
    upBy : 'king', upOn : 23/6/1999 
    
  }];
  
  constructor(public usersService:UsersService) { }

  ngOnInit() {
    // this.usersService.getUsers().subscribe((res:any)=> {
    //   this.users = res.data;
    // });
  }
}
