import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eleve } from 'src/app/models/eleve';
import { Inscription } from 'src/app/models/inscription';
import { Mensualite } from 'src/app/models/mensualite';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CEleveServiceService {

  private apiUrl = `${environment.apiBaseUrl}/v1/eleve`;

  constructor(private http:HttpClient) { }

  public inscrireEleve(
    inscription : Inscription
  ) : Observable<Inscription>
  {
    return this.http.post<Inscription>(
      `${this.apiUrl}/inscription`, inscription
    )
  }

  public payerMensualite(
    mensualite : Mensualite
  ) : Observable<Mensualite>
  {
    return this.http.post<Mensualite>(
      `${this.apiUrl}/mensualite`, mensualite
    )
  }

  public reinscrireEleve(
    inscription : Inscription
  ) : Observable<Inscription>
  {
    return this.http.post<Inscription>(
      `${this.apiUrl}/re-inscription`, inscription
    )
  }

  public recupererInscriptionsEleve(
    id : string
  ) : Observable<Inscription[]>
  {
    return this.http.get<Inscription[]>(
      `${this.apiUrl}/${id}/inscriptions`
    )
  }

  public recupererMensualitesEleve(
    id : string
  ) : Observable<Mensualite[]>
  {
    return this.http.get<Mensualite[]>(
      `${this.apiUrl}/${id}/mensualite`
    )
  }

  public recupererEleve(
    id : string
  ) : Observable<Eleve>
  {
    return this.http.get<Eleve>(
      `${this.apiUrl}/${id}`
    )
  }

  public recupererElevesActifs(
  ) : Observable<Eleve[]>
  {
    return this.http.get<Eleve[]>(
      `${this.apiUrl}/inscrits`
    )
  }
  
  public supprimerEleve(
    id : string
  ) : Observable<Boolean>
  {
    return this.http.delete<Boolean>(
      `${this.apiUrl}/${id}`
    )
  }
}
