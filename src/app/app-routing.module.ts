import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAdminComponent} from "./base/comps/user-admin/user-admin.component";
import {UserDetailComponent} from "./base/comps/user-detail/user-detail.component";

const routes: Routes = [
  {
    path: "user",
    component: UserAdminComponent
  },
  {
    path: "user/:id",
    component: UserDetailComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
