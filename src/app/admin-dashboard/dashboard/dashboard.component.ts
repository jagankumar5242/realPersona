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
  p: any;
  public users: any = []; 
  showDelete = false;
  modalReference: any = NgbModal;
  isCheckAll = false;

  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: any) => {
      this.users = res.data.map((ele: any) => {
        ele.isSelected = false;
        return ele;
      });
    });
    // this.primengConfig.ripple = true;
  }
  reRoute() {
    this.router.navigate(['/dashboard/add-person']);
  }
  editPerson() {
    this.router.navigate(['/dashboard/add-person'], {
      queryParams: { isEdit: 'true' },
    });
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
      // }
      // });
    }, 100);
  }

  // reRoute() {
  //   this.router.navigate(['/add-person']);
  // }

  deletePerson(item: any) {
    item.forEach((ele: any) => {
      const userIndex = this.users.findIndex((userEle : any) => userEle.id === ele.id );
      this.users.splice(userIndex, 1);
    })
    // this.usersService.deletePerson(item).subscribe(
    //   () => console.log(`user is deleted`),
    //   (err) => console.log(`user not deleted`)
    // );
  }
  delete( item:any){
    this.openDialog( )
  }
  CheckAllOptions() {
    setTimeout(() => {
      this.users.map((ele: any) => (ele.isSelected = this.isCheckAll));
      this.taggleDelete('i', 'u');
    }, 100);
  }

  openDialog() {
    const ngMdelRef = this.modalService.open(DialogboxComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true,
      windowClass: 'customModalClass',
    });
    ngMdelRef.componentInstance.fromParent = this.users.filter(
      (ele: any) => ele.isSelected
    );
    ngMdelRef.result.then((res) => {
      console.log(res);
      if (res.success == true) {
        // console.log('hi');
        const getSelected = this.users.filter((ele: any) => ele.isSelected);
        this.deletePerson(getSelected);
        console.log(getSelected);
      }

      //  this.users.forEach((element : any) => {
      //   if(element.isSelected == true){
      //     this.showDelete = true;
      // }
    });
  }
}
