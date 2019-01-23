import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './comps/user-admin/user-admin.component';
import {NbButtonModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule} from "@nebular/theme";
import { UserDetailComponent } from './comps/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserAdminComponent,
    UserDetailComponent
  ],
  exports: [
    UserAdminComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: "default"}),
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbListModule
  ]
})
export class BaseModule { }
