import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Blog/blog.json';

  constructor(private http: HttpClient) { }

  getBlogData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
