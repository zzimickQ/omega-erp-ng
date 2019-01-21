import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../../base/models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() users: User[] = [];

  @Output() userSelected = new EventEmitter<User>();

}
