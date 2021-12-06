import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mensualite } from '../models/mensualite';

@Injectable({
  providedIn: 'root'
})
export class MensualiteService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Mensualite[]> {
    return this.http.get<Mensualite[]>(`${this.apiUrl}/mensualite`);
  }

  public getOne(id : Number) : Observable<Mensualite> {
    return this.http.get<Mensualite>(`${this.apiUrl}/mensualite/${id}`);
  }

  public postOne(corps : Mensualite) : Observable<Mensualite> {
    return this.http.post<Mensualite>(`${this.apiUrl}/mensualite`, corps);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/mensualite/${id}`); 
  }
}
