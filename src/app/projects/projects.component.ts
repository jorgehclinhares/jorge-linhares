import { Component } from '@angular/core';
import { Projects } from '../projects';

import * as moment from 'moment';
import 'moment/min/locales.min'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Array<any>;

  constructor () {
    this.projects = Projects;
  }

}
