import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesCategoriesService {

  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Services';

  constructor(private http: HttpClient) { }

  getServicesCategoriesData(categoriesId: string): Observable<any> {
    const url = `${this.jsonUrl}/${categoriesId}.json`;

    return this.http.get(this.jsonUrl);
  }

}
