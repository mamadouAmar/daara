import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eleve } from '../models/eleve';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/eleve`);
  }

  public getOne(id : Number) : Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/eleve/${id}`);
  }

  public postOne(corps : Eleve) : Observable<Eleve> {
    return this.http.post<Eleve>(`${this.apiUrl}/eleve`, corps);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eleve/${id}`); 
  }
}
