import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private baseUrl: string = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tools';

  constructor(private http: HttpClient) { }

  getCategoryData(categoriesId: string, toolId: string): Observable<any> {
    const url = `${this.baseUrl}/${categoriesId}/${categoriesId}.json`;
    console.log(url);

    return this.http.get<any>(url);
  }
}
