import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get<T>(`${environment.API_URL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any, options?: any): Observable<any> {
    return this.http
      .put<T>(`${environment.API_URL}${path}`, body, options)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any, options?: any): Observable<any> {
    return this.http
      .post<T>(`${environment.API_URL}${path}`, body, options)
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string, options?: any): Observable<any> {
    return this.http
      .delete<T>(`${environment.API_URL}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any): Observable<never> {
    return throwError(error.error);
  }
}
