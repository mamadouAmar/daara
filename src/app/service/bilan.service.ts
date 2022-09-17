import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bilan } from '../models/bilan';
import { Entree } from '../models/entree';
import { Sortie } from '../models/sortie';

@Injectable({
  providedIn: 'root'
})
export class BilanService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Bilan[]> {
    return this.http.get<Bilan[]>(`${this.apiUrl}/bilan`);
  }

  public getOne(
    id : Number
  ) : Observable<Bilan> {
    return this.http.get<Bilan>
    (`${this.apiUrl}/bilan/${id}`);
  }

  public calculerBilan(bilan : Bilan){
    return this.http.post<Bilan>(`${this.apiUrl}/bilan`, bilan);
  }

  public getEntrees() : Observable<Entree[]>{
    return this.http.get<Entree[]>(`${this.apiUrl}/bilan/entrees`);
  }

  public getSorties() : Observable<Sortie[]>{
    return this.http.get<Sortie[]>(`${this.apiUrl}/bilan/sorties`);
  }
}
