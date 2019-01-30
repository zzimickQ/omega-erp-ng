import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbTooltipModule,
  NbUserModule,
  NbWindowModule
} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ListViewComponent} from './components/list-view/list-view.component';
import {RouterModule} from "@angular/router";
import {OgCommonModule} from "../og-common.module";
import { CircleImageComponent } from './dumb-components/circle-image/circle-image.component';
import { TablularListComponent } from './dumb-components/tablular-list/tablular-list.component';


/*

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
*/

const BASE_MODULES = [
  CommonModule,
  OgCommonModule
];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbProgressBarModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbStepperModule,
  NbButtonModule,
  NbListModule,
  NbToastrModule,
  NbInputModule,
  NbAccordionModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
];

const COMPONENTS = [
  DashboardComponent,
  HeaderComponent,
  LoginComponent,
  SidebarComponent,
  ListViewComponent,
  CircleImageComponent,
  TablularListComponent
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: "default"
    },
    // [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME ],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbWindowModule.forRoot().providers,
  ...NbToastrModule.forRoot().providers,

];

const PIPES = [];

@NgModule({
  declarations: [
    ...COMPONENTS, ...PIPES,
  ],
  imports: [
    ...BASE_MODULES, ...NB_MODULES,
  ],
  exports: [
    ...NB_MODULES, ...COMPONENTS, ...PIPES
  ],
  providers: [
    ...NB_THEME_PROVIDERS
  ]
})
export class ThemeModule {
}
