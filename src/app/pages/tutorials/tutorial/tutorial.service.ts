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
    console.log(url);

    return this.http.get<any>(url);
  }
}
