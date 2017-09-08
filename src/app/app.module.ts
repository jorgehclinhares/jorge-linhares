import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent
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
