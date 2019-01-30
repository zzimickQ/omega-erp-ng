import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const COMMON_MODULES = [

  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    ...COMMON_MODULES
  ],
  exports: [
    ...COMMON_MODULES
  ]
})
export class OgCommonModule { }
