import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/About/projects.json';

  constructor(private http: HttpClient) {}

  getProjectsData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
