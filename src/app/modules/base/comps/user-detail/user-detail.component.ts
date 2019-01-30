import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { switchMap } from 'rxjs/operators';
import {User} from "../../models/user";
@Component({
  selector: 'og-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User;
  mapobj = {};

  constructor(private activeRoute: ActivatedRoute) {
    this.user = new User();
    this.mapobj = {
      "Full Name": "Zemichale Tesfaye",
      "Age": "23",
      "Sex": "Male",
      "Asonge": "Had Only",
    }
  }

  ngOnInit() {
    this.activeRoute.paramMap.pipe(switchMap((param: ParamMap, i) => {
      console.log(param.get("id"));
      return null;
    }))
  }

}
