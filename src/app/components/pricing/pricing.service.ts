import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceCategory } from './pricing.model';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private jsonUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Pricing/Pricing.json';

  constructor(private http: HttpClient) { }

  getPricingData(): Observable<ServiceCategory> {
    return this.http.get<ServiceCategory>(this.jsonUrl);
  }
}
