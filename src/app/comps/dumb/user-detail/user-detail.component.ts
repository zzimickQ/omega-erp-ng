import {Component, OnInit, Input, Output} from '@angular/core';
import {User} from "../../../base/models/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() user: User;

}
