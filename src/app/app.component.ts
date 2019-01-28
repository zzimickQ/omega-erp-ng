import {Component, OnInit} from '@angular/core';
import {NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {

  }

  toggleSideBar() {
    this.sidebarService.toggle();
  }
}
