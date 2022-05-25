import { Component, OnInit, Input } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})

export class DialogboxComponent implements OnInit {
  fromParent :any;
  names = [];
  constructor( public ngbModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.fromParent);
    const getNames = this.fromParent.map((ele: any) =>{
      return ele.firstname + ' ' + ele.lastname;
    });
    console.log(getNames);
    this.names = getNames;
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
