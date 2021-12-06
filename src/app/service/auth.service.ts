import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depense } from '../models/depense';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Depense[]> {
    return this.http.get<Depense[]>(`${this.apiUrl}/depense`);
  }

  public getOne(id : Number) : Observable<Depense> {
    return this.http.get<Depense>(`${this.apiUrl}/depense/${id}`);
  }

  public postOne(depense : Depense) : Observable<Depense> {
    return this.http.post<Depense>(`${this.apiUrl}/depense`, depense);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/depense/${id}`); 
  }
}
