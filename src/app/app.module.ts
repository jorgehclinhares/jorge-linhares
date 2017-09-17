import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TechnologyComponent } from './technology/technology.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    TimelineComponent,
    TechnologyComponent,
    HeaderComponent,
    ProjectsComponent
    // ProjectsComponent,
    // TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
