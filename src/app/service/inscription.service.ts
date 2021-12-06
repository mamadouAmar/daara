import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Inscription[]> {
    return this.http.get<Inscription[]>(`${this.apiUrl}/inscription`);
  }

  public getOne(id : Number) : Observable<Inscription> {
    return this.http.get<Inscription>(`${this.apiUrl}/inscription/${id}`);
  }

  public postOne(corps : Inscription) : Observable<Inscription> {
    return this.http.post<Inscription>(`${this.apiUrl}/inscription`, corps);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/inscription/${id}`); 
  }
}
