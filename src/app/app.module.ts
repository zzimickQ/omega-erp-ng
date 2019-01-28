import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {BaseModule} from "./modules/base/base.module";
import {NbImportModule} from "./modules/nb-import/nb-import.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from './@theme/components/header/header.component';
import { SidebarComponent } from './@theme/components/sidebar/sidebar.component';
import { LoginComponent } from './@theme/components/login/login.component';
import { DashboardComponent } from './@theme/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    NbImportModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseModule,
  ],
  providers: [
    NbSidebarService,
    NbMenuService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
