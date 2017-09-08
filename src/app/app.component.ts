import { Component } from '@angular/core';
import { Timeline, Experience, TechnologiesLeft, TechnologiesRight, Projects } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timeline: Array<any>;
  experience: Array<any>;
  technologiesLeft: Array<any>;
  technologiesRight: Array<any>;
  projects: Array<any>;

  constructor () {
    this.timeline = Timeline;
    this.experience = Experience;
    this.technologiesLeft = TechnologiesLeft;
    this.technologiesRight = TechnologiesRight;
    this.projects = Projects;
  }
  
}
