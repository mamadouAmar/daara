import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from 'src/app/models/employe';
import { Paiement } from 'src/app/models/paiement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CEmployeServiceService {

  private apiUrl = `${environment.apiBaseUrl}/v1/employe`;

  constructor(private http:HttpClient) { }

  public nouvelEmploye(
    nouvelEmploye : Employe
  ) : Observable<Employe>
  {
    return this.http.post<Employe>(`${this.apiUrl}`, nouvelEmploye)
  }

  public payerEmploye(
    paiement : Paiement
  ) : Observable<Paiement>
  {
    return this.http.post<Paiement>(`${this.apiUrl}/payer`, paiement)
  }

  public recupererPaiementsEmploye(
    id : string
  ) : Observable<Paiement[]>
  {
    return this.http.get<Paiement[]>(`${this.apiUrl}/${id}/paiements`)
  }

  public recupererEmploye(
    id : string
  ) : Observable<Employe>
  {
    return this.http.get<Employe>(`${this.apiUrl}/${id}`)
  }

  public recupererEmployesActif(
  ) : Observable<Employe[]>
  {
    return this.http.get<Employe[]>(`${this.apiUrl}`)
  }

  public supprimerEmploye(
    id : string
  ) : Observable<Boolean>
  {
    return this.http.delete<Boolean>(`${this.apiUrl}/${id}`)
  }
}
