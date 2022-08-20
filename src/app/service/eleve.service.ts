import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eleve } from '../models/eleve';
import { Mensualite } from '../models/mensualite';
import { Niveau } from '../models/niveau';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/eleve`);
  }

  public getElevesPasEnRegle(
    year : number = new Date().getFullYear(),
    mois : number = new Date().getMonth()-1
  ) : Observable<Eleve[]> 
  {
    return this.http
      .get<Eleve[]>
      (`${this.apiUrl}/eleve/pasEnregle/${year}/${mois}`);
  }

  public modifierInformationsEleve(
    eleve : Eleve
    ) : Observable<Eleve> {
    return this.http
    .post<Eleve>
    (`${this.apiUrl}/eleve`, eleve);
  }

  public getOne(
    id : Number
  ) : Observable<Eleve> {
    return this.http.get<Eleve>
    (`${this.apiUrl}/eleve/${id}`);
  }

  public inscrireEleve(
    eleve : Eleve
    ) : Observable<Eleve> {
    return this.http
    .post<Eleve>
    (`${this.apiUrl}/eleve/inscrire`, eleve);
  }

  public reglerMensualiteEleve(
    mensualite : Mensualite
    ) : Observable<Mensualite> {
    return this.http
    .post<Mensualite>
    (`${this.apiUrl}/eleve/regler-mensualite`, mensualite);
  }

  public delete(
    id : Number
    ) : Observable<String> {
    return this.http.
    delete<String>
    (`${this.apiUrl}/eleve/${id}`); 
  }
}
