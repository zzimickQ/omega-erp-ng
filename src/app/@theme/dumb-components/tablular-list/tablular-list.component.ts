import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'og-tablular-list',
  templateUrl: './tablular-list.component.html',
  styleUrls: ['./tablular-list.component.scss']
})
export class TablularListComponent implements OnInit, OnChanges {


  @Input() map: any = {};
  @Input() keys: any = {};

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map != null) {
      this.keys = Object.keys(this.map);
      console.log(this.keys);
    }
  }

}
