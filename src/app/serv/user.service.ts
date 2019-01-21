import { Injectable } from '@angular/core';
import {User} from "../base/models/user";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post("/api/user", user)
      .pipe(map(user => {
        return new User().deserialize(user);
      }));
  }

  getUsers() {
    return this.http.get("/api/user")
      .pipe(map(users => {
        return new User().deserializeArray(users);
      }));
  }
}
