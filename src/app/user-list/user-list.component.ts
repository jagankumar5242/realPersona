import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: any = []

  constructor() { }

  ngOnInit(): void {
    this.userList = [{
      name: 'Jagan',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'midCard'
    }, {
      name: 'Vishal',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'smallCard'
    }, {
      name: 'Anil',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'highCard'
    }, {
      name: 'Rajendar',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'midCard'
    }, {
      name: 'Vishnu',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'smallCard'
    }, {
      name: 'Bhargav',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'highCard'
    }, {
      name: 'Rajendar',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'midCard'
    }, {
      name: 'Vishnu',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'smallCard'
    }, {
      name: 'Bhargav',
      imgURL: 'assets\images\tukaram.svg',
      cardClass: 'highCard'
    }]
  }

}
