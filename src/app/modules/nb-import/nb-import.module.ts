import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbInputModule, NbLayoutModule, NbListModule, NbSidebarModule, NbThemeModule} from "@nebular/theme";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: "default"}),
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbSidebarModule,
    NbLayoutModule,
    NbInputModule,
    NbListModule
  ],
  exports: [

  ]
})
export class NbImportModule { }
