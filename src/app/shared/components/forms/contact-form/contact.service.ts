import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '@/core/toast.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = environment.SERVER_URL +'feedbacks'; // Replace with your actual API endpoint

  constructor(private http: HttpClient, private ToastService: ToastService) {}

  sendMessage(formData: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, formData)
      .pipe(
        catchError((error) => {
          this.handleApiError(error);
          throw error;
        })
      );
  }

  private handleApiError(error: any): void {
    // Handle API error, e.g., show a toastr notification
    this.ToastService.error('An error occurred while sending the message.');
    console.error('API error:', error);
  }
}
