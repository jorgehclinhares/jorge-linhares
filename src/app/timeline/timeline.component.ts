import { Component, OnInit } from '@angular/core';
import { Timeline } from '../data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timeline: Array<any>;

  ngOnInit() {
    this.timeline = Timeline;
  }

}
