import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbActionsModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule, NbMenuModule, NbMenuService,
  NbSidebarModule,
  NbThemeModule, NbUserModule
} from "@nebular/theme";
import {NbMenuInternalService} from "@nebular/theme/components/menu/menu.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({name: "default"}),
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbActionsModule,
    NbMenuModule,
    NbUserModule,
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    NbActionsModule,
    NbMenuModule,
    NbUserModule,
  ],
  providers: [
    NbMenuService,
    NbMenuInternalService,
  ]
})
export class NbImportModule {
}
