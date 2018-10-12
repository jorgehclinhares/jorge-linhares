import { Component, OnDestroy } from '@angular/core';
import { Timeline, Experience, TechnologiesLeft, TechnologiesRight, Projects } from './data';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  timeline: Array<any>;
  experience: Array<any>;
  technologiesLeft: Array<any>;
  technologiesRight: Array<any>;
  projects: Array<any>;
  dataSubscription: Subscription;

  constructor(
    private http: HttpClient
  ) {
    // this.dataSubscription = this.http.get('assets/data.json')
    //   .subscribe(
    //     res => {
    //       this.timeline = res['timeline'];
    //       this.experience = res['experience'];
    //       this.technologiesLeft = res['technologiesLeft'];
    //       this.technologiesRight = res['technologiesRight'];
    //       this.projects = res['projects'];
    //     }
    //   );
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

}
