import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialsCategoriesService {

  private baseUrl: string = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tutorial';

  constructor(private http: HttpClient) { }

  getCategoryData(categoriesId: string): Observable<any> {
    const url = `${this.baseUrl}/${categoriesId}/${categoriesId}.json`;
    return this.http.get<any>(url);
  }
}
