import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  baseUrl = environment.BASE_API_URL_BACKEND;

  constructor(private http: HttpClient) { }
  public get(apiURL: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + apiURL, { observe: 'response' });
  }
  public post(apiURL: string, payload: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + apiURL, payload, {
      observe: 'response',
    });
  }

  public put(apiURL: string, payload: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + apiURL, payload, {
      observe: 'response',
    });
  }

  public delete(apiURL: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl + apiURL, {
      observe: 'response',
    });
  }
}
