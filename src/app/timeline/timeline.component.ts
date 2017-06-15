import { Component } from '@angular/core';
import { Timeline } from '../timeline';

import * as moment from 'moment';
import 'moment/min/locales.min'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  projects: Array<any>;

  constructor () {

    for (let i in Timeline) {
     Timeline[i]['showDate'] = moment(Timeline[i].date).format("ll");
    }
    
    this.projects = Timeline;

  }

}
