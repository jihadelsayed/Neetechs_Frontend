import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tools/tools.json';

  constructor(private http: HttpClient) { }

  getToolsData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
