import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../../base/models/user";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  @Output() onCreate = new EventEmitter<User>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: "",
      lastName: "",
      email: "",
      employeeId: ""
    });
  }

}
