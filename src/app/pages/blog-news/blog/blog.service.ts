import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private baseUrl: string = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Blog';

  constructor(private http: HttpClient) { }

  getCategoryData(categoriesId: string, blogId: string): Observable<any> {
    const url = `${this.baseUrl}/${categoriesId}/${blogId}.json`;
    return this.http.get<any>(url);
  }

}
