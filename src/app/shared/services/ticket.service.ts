// ticket.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiEndpoint = 'YOUR_API_ENDPOINT';

  constructor(private http: HttpClient) {}

  getTicketData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiEndpoint).pipe(
      map((data) => {
        // Assuming the API response contains an array of ticket data
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching ticket data from the API:', error);
        // Return an empty array or handle the error as needed
        return of([]);
      })
    );
  }
}
