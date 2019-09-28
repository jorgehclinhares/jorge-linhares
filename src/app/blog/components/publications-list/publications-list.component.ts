import { Component, OnInit } from '@angular/core';
import { BlogService } from 'app/blog/services/blog/blog.service';

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {

  page: number;
  publications: Array<Publication>;

  constructor(
    private blogService: BlogService
  ) {
    this.page = 1;
  }

  ngOnInit() {
    this.blogService.loadPublications()
      .then(() => {
        this.publications = this.blogService.getPublicatinsPage(this.page);
        this.page++;
      });
  }

}
