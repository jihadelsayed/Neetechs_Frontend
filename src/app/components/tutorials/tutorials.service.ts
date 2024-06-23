import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tutorial/tutorial.json';

  constructor(private http: HttpClient) { }

  getTutorialData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
