import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserServiceService} from "../../services/user-service.service";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'og-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserServiceService,
              private ngToastService: NbToastrService,
              private route: Router) {
    this.formGroup = this.fb.group({
      "employeeId": [''],
      "firstName": [''],
      "lastName": [''],
      "email": [''],
      "username": [''],
      "password": [''],
      "phoneNumberMobile": [''],
      "phoneNumberLocal": [''],
      "profileUrl": [''],
      // "jobPosition": [''],
    })
  }

  ngOnInit() {
  }

  submit(value) {
    this.userService.registerNewUser(value)
      .subscribe(user => {
          // create success
          this.route.navigateByUrl("/base/user/" + user.id);
          this.ngToastService.success("User Created Successfully!", "User Creation");
        },
        error => {
          this.ngToastService.danger("User Created Failed!", "User Creation")
        });
  }

}
