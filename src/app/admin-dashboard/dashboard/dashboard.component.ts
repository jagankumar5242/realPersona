import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  p:any;
  public users: any = [];
  showDelete = false;
  
  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit() 
  {
    this.usersService.getUsers().subscribe((res: any) => {
      this.users = res.data.map((ele: any) => {
        ele.isSelected = false;
        return ele;
      });
    });
    // this.primengConfig.ripple = true;
  }
  reRoute(){
    this.router.navigate(['/dashboard/add-person'])
  }
  editPerson(){
    this.router.navigate(
      ['/dashboard/add-person'],
      { queryParams: {isEdit:'true' } }
    );
  }
  taggleDelete(item: any, event: any) {
    setTimeout(() => {
      const getSelected = this.users.find(
        (ele: any) => ele.isSelected === true
      );
      this.showDelete = getSelected ? true : false;
      // this.users.forEach((element : any) => {
      //   if(element.isSelected == true){
      //     this.showDelete = true;
      //   }
      // });
    }, 100);
  }
  
  deletePerson(item: any) {
    this.usersService.deletePerson(item).subscribe(
      ()=>console.log(`employ is deleted`),(err)=> console.log(`user not deleted`)
    );
    // this.usersService.deletePerson(item).subscribe((res: any) => {
    //   alert('Persona Deleted');
    // });
  }
  
  CheckAllOptions() {
    if (this.users.every((val:any) => val.isSelected == true))
      this.users.forEach((val:any) => { val.isSelectedCheckAllOptions = false });
    else
      this.users.forEach((val:any) => { val.isSelected = true }) ;
  }
  open(){
   const ngMdelRef = this.modalService.open(DialogboxComponent);
   ngMdelRef.result.then((res: any) =>{
    console.log(res);
    
   }, (err: any) =>{
    console.log(err);
    
   })
  }
  // modalReference: NgbModalRef;
// constructor(private modalService: NgbModal) { }
//this.modalReference = this.modalService.open(DialogboxComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});

}