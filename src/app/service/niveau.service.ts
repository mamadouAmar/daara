import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Niveau } from '../models/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Niveau[]> {
    return this.http.get<Niveau[]>(`${this.apiUrl}/niveau`)
  }

  public getOne(
    id : Number
  ) : Observable<Niveau> {
    return this.http.get<Niveau>
    (`${this.apiUrl}/niveau/${id}`);
  }

  public post(niveau : Niveau) : Observable<Niveau> {
    return this.http.post<Niveau>(`${this.apiUrl}/niveau`, niveau);
  }
}
