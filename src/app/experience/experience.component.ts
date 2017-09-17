import { Component, OnInit } from '@angular/core';
import { Experience } from '../data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: Array<any>;

  ngOnInit() {
    this.experience = Experience;
  }

}
