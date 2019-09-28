import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogServiceModule } from './blog.service.module';

@Injectable({
  providedIn: BlogServiceModule
})
export class BlogService {

  readonly itensPerPage: number;
  private publications: Array<any>;

  constructor(
    private http: HttpClient
  ) {
    this.itensPerPage = 10;
  }

  loadPublications() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/publications/publications.json').subscribe(
        (data: any) => {
          this.publications = data.publications;
          return resolve(true);
        },
        (err) => {
          return reject(true);
        }
      );
    });
  }

  getPublications() {
    return this.publications;
  }

  getPublication(identifier: string) {
    return this.publications.find((publication) => {
      return publication.identifier === identifier;
    });
  }

  getPublicatinsPage(page: number) {
    const publications = this.publications;
    const sliceInicio = (page - 1) * this.itensPerPage;
    const sliceFim = sliceInicio + this.itensPerPage;
    return publications.slice(sliceInicio, sliceFim);
  }
}
