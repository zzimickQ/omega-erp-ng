import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {UserService} from "../../../serv/user.service";
import {User} from "../../../base/models/user";


@Component({
  selector: 'app-user-smart',
  templateUrl: './user-smart.component.html',
  styleUrls: ['./user-smart.component.scss']
})
export class UserSmartComponent implements OnInit {


  mode = "LIST";

  users: User[] = [];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  loadUsersList() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users
      );
  }

  selected(user) {
    this.mode = "DETAIL";
    this.selectedUser = user;
  }

  changeMode(mode) {
    this.mode = mode;
  }

  submitted(user) {
    // console.log(user);
    this.userService.createUser(user)
      .subscribe(
        user => { this.selected(user); this.users.push(user) }
      );
  }

}
