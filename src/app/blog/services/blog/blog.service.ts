import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogServiceModule } from './blog.service.module';

@Injectable({
  providedIn: BlogServiceModule
})
export class BlogService {

  private publications: Array<any>;

  constructor(
    private http: HttpClient
  ) { }

  loadPublications() {
    this.http.get('assets/publications/publications.json').subscribe(
      (data: any) => this.publications = data.publications
    );
  }

  getPublications() {
    return this.publications;
  }

  getPublication(identifier: string) {
    return this.publications.find((publication) => {
      return publication.identifier === identifier;
    });
  }
}
