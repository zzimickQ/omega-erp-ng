import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'og-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  users: User[] = null;

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      }, error=> {

      })
  }

}
