import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { PrimeNGConfig } from 'primeng/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  router: any;
  p:any;
  public users: any = [];
  showDelete = false;
  
  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private primengConfig: PrimeNGConfig,
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
  reRoute() {
    this.router.navigate(['/Add-person']);
  }
  deletePerson(item: any) {
    this.usersService.deletePerson(item).subscribe(
      ()=>console.log(`employ is deleted`),(err)=> console.log(`user not deleted`)
    );
    // this.usersService.deletePerson(item).subscribe((res: any) => {
    //   alert('Persona Deleted');
    // });
  }
  editPerson(item: any) {
    this.router.navigate(['/Add-person']);
  }
  CheckAllOptions() {
    if (this.users.every((val:any) => val.isSelected == true))
      this.users.forEach((val:any) => { val.isSelectedCheckAllOptions = false });
    else
      this.users.forEach((val:any) => { val.isSelected = true }) ;
  }
  open(){
   const ngMdelRef = this.modalService.open(DialogboxComponent);
   ngMdelRef.result.then(res =>{
    console.log(res);
    
   }, err =>{
    console.log(err);
    
   })
  }
  // modalReference: NgbModalRef;
// constructor(private modalService: NgbModal) { }
//this.modalReference = this.modalService.open(DialogboxComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});

}