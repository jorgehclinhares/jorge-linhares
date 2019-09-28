import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './components/publication/publication.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { BlogServiceModule } from './services/blog/blog.service.module';
import { NgxMdModule } from 'ngx-md';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PublicationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownToHtmlModule,
    NgxMdModule.forRoot(),
    BlogServiceModule
  ]
})
export class BlogModule { }
