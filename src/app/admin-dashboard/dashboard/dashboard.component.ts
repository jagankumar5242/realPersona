import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  router: any;
  public users: any=[];
  
  
  constructor(private usersService:UsersService) {
   }

  ngOnInit() {
    this.users = [{
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999' 
      
    },
    {
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999' 
      
    },
    {
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999' 
      
    }];
    this.usersService.getUsers().subscribe((res:any)=> {
    this.users = res.data;
     });
     this.users.ripple = true;
  }
  reRoute(){
    this.router.navigate(['/Add-person'])
  }
}
