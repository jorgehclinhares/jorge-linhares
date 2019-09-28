import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  markdownRef: string;
  content: string;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
  ) {
    this.markdownRef = `assets/publications/${this.activatedRoute.snapshot.params.identifier}.md`;
  }

  ngOnInit() {
    console.log(this.blogService.getPublications());
  }

}
