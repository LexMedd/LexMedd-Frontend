import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = environment.serverBasePath;

  constructor(private http: HttpClient) {}

  getAll(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${endpoint}`);
  }

  getById(endpoint: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  create(endpoint: string, item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, item);
  }

  update(endpoint: string, item: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${endpoint}/${item.id}`, item);
  }

  delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  // Método específico para obtener el usuario actual
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/current`);
  }
}
