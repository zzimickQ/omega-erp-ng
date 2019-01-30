import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { switchMap } from 'rxjs/operators';
import {User} from "../../models/user";
import {UserServiceService} from "../../services/user-service.service";
@Component({
  selector: 'og-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {

  user: User;
  mapobj = {};

  constructor(private activeRoute: ActivatedRoute,
              private userService: UserServiceService) {
    this.user = new User();
  }

  ngOnInit() {
    const userId = +this.activeRoute.snapshot.paramMap.get("id");
    this.userService.getUser(userId)
      .subscribe(
        user => {
          this.user = user;
          this.updateMapObj();
        },
        error => {

        }
      );
    this.activeRoute.paramMap.pipe(switchMap((param: ParamMap, i) => {
      const userId = +param.get("id");
      console.log(userId);

      this.userService.getUser(userId)
        .subscribe(
          user => {
            this.user = user;
          },
          error => {

          }
        );
      return null;
    }));
  }

  updateMapObj() {
    this.mapobj = {
      "Full Name": this.user.fullName,
      "Employee Id": this.user.employeeId,
      "Email": this.user.email,
      "PhoneNumber": this.user.phoneNumberLocal,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateMapObj();
    console.log("mapObjChanged");
  }



}
