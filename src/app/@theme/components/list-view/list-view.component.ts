import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'og-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() items;
  b;

  constructor() {

    this.b = [0, 10, 32, 5, 342, 3421, 42, 41, 23];

  }

  ngOnInit() {
  }

}
