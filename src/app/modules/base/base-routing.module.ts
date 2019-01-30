import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserAdminComponent} from "./comps/user-admin/user-admin.component";
import {UserDetailComponent} from "./comps/user-detail/user-detail.component";
import {UserCreateComponent} from "./comps/user-create/user-create.component";

const routes: Routes = [
  {
    path: "*",
    component: UserAdminComponent
  },
  {
    path: "users",
    component: UserAdminComponent,
  },
  {
    path: "user/create",
    component: UserCreateComponent,
  },
  {
    path: "user/:id",
    component: UserDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BaseRoutingModule {
}
