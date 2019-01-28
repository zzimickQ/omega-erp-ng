import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'og-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.sidebarService.toggle();
  }

}
