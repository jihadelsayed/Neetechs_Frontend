import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.ServerURL;

  

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signin`, credentials);
  }
  signup(userDetails: {
    name: string;
    password: string;
    email: string;
  }): Observable<any> {
    console.log(userDetails);
    return this.http.post(`${this.apiUrl}signup`, userDetails);
  }
}
