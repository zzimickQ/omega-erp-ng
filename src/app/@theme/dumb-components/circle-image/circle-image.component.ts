import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'og-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.scss']
})
export class CircleImageComponent implements OnInit {

  @Input() size = "medium";
  @Input() src = "";

  constructor() { }

  ngOnInit() {
  }

}
