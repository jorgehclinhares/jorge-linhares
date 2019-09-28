import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './components/publication/publication.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogServiceModule } from './services/blog/blog.service.module';
import { NgxMdModule } from 'ngx-md';
import { HeaderComponent } from './components/header/header.component';
import { PublicationsListComponent } from './components/publications-list/publications-list.component';

@NgModule({
  declarations: [
    PublicationComponent,
    HeaderComponent,
    PublicationsListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxMdModule.forRoot(),
    BlogServiceModule
  ]
})
export class BlogModule { }
