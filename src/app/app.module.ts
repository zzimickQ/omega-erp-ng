import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThemeModule} from "./@theme/theme.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {OgCommonModule} from "./og-common.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ThemeModule,
    OgCommonModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
