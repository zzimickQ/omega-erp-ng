import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAdminComponent} from './comps/user-admin/user-admin.component';
import {UserDetailComponent} from './comps/user-detail/user-detail.component';
import {NbImportModule} from "../nb-import/nb-import.module";

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
export class BaseModule {
}
