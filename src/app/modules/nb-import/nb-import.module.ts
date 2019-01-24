import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: "default"}),
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbListModule
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbListModule
  ]
})
export class NbImportModule {
}
