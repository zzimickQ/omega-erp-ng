import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'og-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu: NbMenuItem[] = [
    {
      title: "User Administration",
      link: "/testlink123"
    },
    {
      title: "Organization Structure",
      link: "/ola"
    },
    {
      title: "",
      link: "something else"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
