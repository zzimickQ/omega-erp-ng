import {Component, OnInit} from '@angular/core';
import {JobPosition} from "./base/models/job-position";
import {JobCategory} from "./base/models/job-category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {

    let jcdata = {
      id: 32,
      name: "test213",
      description: "sdjaflsakdjf laskdf;lksa dkf ",
      jobPositions: [
        {
          id: 32,
          title: "sera 1",
          description: "safdlkajsdf",
          level: 3,
        },
        {
          id: 34,
          title: "sera 2",
          description: "gasdfasdfsd",
          level: 2,
        }
      ]
    };

    console.log(jcdata);

    console.log(new JobCategory().deserialize(jcdata))
  }


}
