import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl: string = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tutorial';

  constructor(private http: HttpClient) { }

    getCategoryData(categoriesId: string, tutorialId: string): Observable<any> {
      const url = `${this.baseUrl}/${categoriesId}/${tutorialId}.json`;
      return this.http.get<any>(url);
    }
    getCategoryList(categoryId: string): Observable<any> {
          const url = `${this.baseUrl}/${categoryId}/${categoryId}.json`;

    return this.http.get<any>(url);
  }

}
