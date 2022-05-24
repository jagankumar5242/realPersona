import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './users.service';
import { PrimeNGConfig } from 'primeng/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  router: any;
  p: any;
  public users: any = [];
  showDelete = false;
  modalReference: any = NgbModalRef;
  isCheckAll = false;
  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private primengConfig: PrimeNGConfig
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
  reRoute() {
    this.router.navigate(['/add-person']);
  }
  deletePerson(item: any) {
    this.usersService.deletePerson(item).subscribe(
      () => console.log(`user is deleted`),
      (err) => console.log(`user not deleted`)
    );
  }
  editPerson(item: any) {
    this.router.navigate(['/Add-person']);
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
      // / this.users.forEach((element : any) => {
      //   if(element.isSelected == true){
      //     this.showDelete = true;
      // }
    });
  }
}
