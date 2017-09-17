import { Component, OnInit } from '@angular/core';
import { Projects } from '../data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any>;

  ngOnInit() {
    this.projects = Projects;
  }

}
