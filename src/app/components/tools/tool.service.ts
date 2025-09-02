import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ToolService {
  private baseUrl = 'https://raw.githubusercontent.com/jihadelsayed/Neetechs/main/JSON/Tools';
  constructor(private http: HttpClient) {}

  getCategoryData(_categoryId: string, toolId: string): Observable<any> {
    const url = `${this.baseUrl}/${toolId}/${toolId}.json`;
    return this.http.get<any>(url, { observe: 'body' }).pipe(
      tap(() => console.log('[ToolService] Loaded:', url)),
      catchError((err) => {
        console.error('[ToolService] ERROR loading', url, err);
        return throwError(() => err);
      })
    );
  }

  getAllTools(): Observable<any> {
    const url = `${this.baseUrl}/tools.json`;
    return this.http.get<any>(url).pipe(
      tap(() => console.log('[ToolService] Loaded tools:', url)),
      catchError((err) => {
        console.error('[ToolService] ERROR loading tools', url, err);
        return throwError(() => err);
      })
    );
  }
}
