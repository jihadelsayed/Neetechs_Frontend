import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Services/services.json';

  constructor(private http: HttpClient) { }

  getServicesData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
