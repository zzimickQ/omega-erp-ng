import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAdminComponent} from './comps/user-admin/user-admin.component';
import {UserDetailComponent} from './comps/user-detail/user-detail.component';
import {ThemeModule} from "../../@theme/theme.module";
import {BaseRoutingModule} from "./base-routing.module";
import {OgCommonModule} from "../../og-common.module";
import { UserCreateComponent } from './comps/user-create/user-create.component';
import {UserServiceService} from "./services/user-service.service";

@NgModule({
  declarations: [
    UserAdminComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    BaseRoutingModule,
    CommonModule,
    ThemeModule,
    OgCommonModule,
  ],
  providers: [
    UserServiceService
  ]
})
export class BaseModule {
}
