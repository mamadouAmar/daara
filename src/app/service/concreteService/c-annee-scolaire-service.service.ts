import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CAnneeScolaireServiceService {

  private apiUrl = `${environment.apiBaseUrl}/v1/annee-scolaire`;

  constructor(private http:HttpClient) { }

  public commencer_nouvelle_annee(objet : any) {
    
  }
}
