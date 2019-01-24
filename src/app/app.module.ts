import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbSidebarService} from '@nebular/theme';
import {BaseModule} from "./modules/base/base.module";
import {NbImportModule} from "./modules/nb-import/nb-import.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NbImportModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseModule,
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
