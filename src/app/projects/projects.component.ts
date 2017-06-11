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

    for (let i in Projects) {
     Projects[i]['showDate'] = moment(Projects[i].date).format("ll");
    }
    
    this.projects = Projects;

  }

}
