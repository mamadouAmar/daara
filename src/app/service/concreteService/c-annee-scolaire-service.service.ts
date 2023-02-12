import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnneeScolaire } from 'src/app/models/annee-scolaire';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CAnneeScolaireServiceService {

  private apiUrl = `${environment.apiBaseUrl}/v1/annee-scolaire`;

  constructor(private http:HttpClient) { }

  public commencerNouvelleAnneeScolaire(annee_scolaire : AnneeScolaire) : Observable<AnneeScolaire>
  {
    return this.http.post<AnneeScolaire>(`${this.apiUrl}`, annee_scolaire)
  }
}
