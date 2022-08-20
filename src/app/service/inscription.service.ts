import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eleve } from '../models/eleve';
import { Inscription } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll(
    year : number = new Date().getFullYear()
  ) : Observable<Inscription[]> {
    return this.http
    .get<Inscription[]>
    (`${this.apiUrl}/inscription/${year}`);
  }

  public getElevesInscrit(
    year : number = new Date().getFullYear()
  ) : Observable<Eleve[]> {
    return this.http
    .get<Eleve[]>
    (`${this.apiUrl}/inscription/${year}/eleve`);
  }

  public getOne(id : Number) : Observable<Inscription> {
    return this.http.get<Inscription>(`${this.apiUrl}/inscription/${id}`);
  }

  public postOne(corps : Inscription) : Observable<Inscription> {
    return this.http.post<Inscription>(`${this.apiUrl}/inscription`, corps);
  }

  public delete(id : Number) : Observable<String> {
    return this.http
      .delete<String>
      (`${this.apiUrl}/inscription/${id}`); 
  }
}
