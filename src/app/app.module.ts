import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbInputModule, NbSidebarModule, NbSidebarService} from '@nebular/theme';
import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbSidebarModule, NbSidebarService,
  NbListModule
} from '@nebular/theme';
import {UserSmartComponent} from './comps/smart/user-smart/user-smart.component';
import {UserListComponent} from './comps/dumb/user-list/user-list.component';
import {UserCreateComponent} from './comps/dumb/user-create/user-create.component';
import {UserDetailComponent} from './comps/dumb/user-detail/user-detail.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BaseModule} from "./base/base.module";

@NgModule({
  declarations: [
    UserSmartComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    AppComponent,

  ],
  imports: [
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbInputModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbSidebarModule,
    NbLayoutModule,
    NbInputModule,
    NbSidebarModule,
    NbListModule

  ],
  providers: [
    NbSidebarService
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
