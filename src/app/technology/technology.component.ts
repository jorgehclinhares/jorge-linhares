import { Component, OnInit } from '@angular/core';
import { TechnologiesLeft, TechnologiesRight } from '../data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologiesLeft: Array<any>;
  technologiesRight: Array<any>;

  ngOnInit() {
    this.technologiesLeft = TechnologiesLeft;
    this.technologiesRight = TechnologiesRight;
  }

}
