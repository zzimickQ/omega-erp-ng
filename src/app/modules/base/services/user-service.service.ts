import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "./base-http.service";
import {map} from "rxjs/operators";
import {User} from "../models/user";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) {

  }

  getAllUsers(): Observable<User[]> {
    return this.http.get("/api/user")
      .pipe(map(value => new User().deserializeArray(value)));
  }

  checkUserExists() {

  }

  registerNewUser(value: User): Observable<User> {
    return this.http.post("/api/user", value)
      .pipe(map(val => new User().deserialize(val)));
  }

  updateUserProfile() {

  }

  getUser(userId: number): Observable<User> {
    return this.http.get("/api/user/" + userId)
      .pipe(map(val => new User().deserialize(val)));

  }
}
