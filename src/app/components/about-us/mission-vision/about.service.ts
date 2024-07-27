import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/About/about.json';

  constructor(private http: HttpClient) {}

  getMissionVisionData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
