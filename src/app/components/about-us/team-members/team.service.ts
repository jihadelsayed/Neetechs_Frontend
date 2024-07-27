import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/About/team.json';

  constructor(private http: HttpClient) {}

  getTeamData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
