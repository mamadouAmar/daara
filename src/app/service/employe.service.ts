import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../models/employe';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.apiUrl}/interne`);
  }

  public getOne(id : Number) : Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/interne/${id}`);
  }

  public postOne(corps : Employe) : Observable<any> {
    return this.http.post<Employe>(`${this.apiUrl}/interne`, corps);
  }

  public delete(id : Number) : Observable<String> {
    return this.http.delete<String>(`${this.apiUrl}/interne/${id}`); 
  }

  public payer_employe(paiement : Paiement) : Observable<Paiement> {
    return this.http.post<Paiement>
    (`${this.apiUrl}/interne/payer-employe`, paiement);
  }

  public getPaiements(
    id : Number
    ): Observable<Paiement[]>{
    return this.http
      .get<Paiement[]>
      (`${this.apiUrl}/interne/${id}/paiement`);
  }
}
