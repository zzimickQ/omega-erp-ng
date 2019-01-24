import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './comps/user-admin/user-admin.component';
import {NbButtonModule, NbInputModule, NbLayoutModule, NbListModule, NbThemeModule} from "@nebular/theme";
import { UserDetailComponent } from './comps/user-detail/user-detail.component';
import {NbImportModule} from "../modules/nb-import/nb-import.module";

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
    NbImportModule
  ]
})
export class BaseModule { }
