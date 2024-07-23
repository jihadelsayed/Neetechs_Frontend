import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://formspree.io/f/xnnajznl'; // Replace with your Formspree form endpoint

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
