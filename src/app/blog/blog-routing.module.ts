import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './components/publication/publication.component';

const routes: Routes = [
  {
    path: ':identifier',
    component: PublicationComponent,
    data: {}
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
