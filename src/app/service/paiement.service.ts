import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getPaiementByYear(
    year : number = new Date().getFullYear()
    ) : Observable<Paiement[]> 
    {
    return this.http
      .get<Paiement[]>
      (`${this.apiUrl}/paiement/${year}`);
  }

  public getPaiementByMonth(
    year : number = new Date().getFullYear(),
    month : number = new Date().getMonth()
    ) : Observable<Paiement[]> 
    {
    return this.http
      .get<Paiement[]>
      (`${this.apiUrl}/paiement/${year}/${month}`);
  }

  public getOne(id : Number) : Observable<Paiement> {
    return this.http.get<Paiement>(`${this.apiUrl}/paiement/${id}`);
  }

  public postOne(corps : Paiement) : Observable<Paiement> {
    return this.http.post<Paiement>(`${this.apiUrl}/paiement`, corps);
  }

  public delete(
    id : Number
    ) : Observable<String> {
    return this.http
    .delete<String>
    (`${this.apiUrl}/paiement/${id}`); 
  }
}
