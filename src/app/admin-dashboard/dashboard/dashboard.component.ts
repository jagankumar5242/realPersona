import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  router: any;
  public users: any=[];
  
  
  constructor(private usersService:UsersService,private primengConfig: PrimeNGConfig) {
   }

  ngOnInit() {
    this.users = [{
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengaluru', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999', nodownloads : '10' 
      
    },
    {
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999',nodownloads : '10' 
      
    },
    {
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999',nodownloads : '10' 
      
    },
    {
      firstname : 'charan',
      lastname : 'Reddy',
      gender : 'male', age : 23, Location : 'Bengalure', Occupation : 'IT',
      upBy : 'king', upOn : '28/4/1999' ,nodownloads : '10'
      
    }];
    this.usersService.getUsers().subscribe((res:any)=> {
    this.users = res.data;
     });
     this.primengConfig.ripple = true;
  }
  reRoute(){
    this.router.navigate(['/Add-person'])
  }
}
