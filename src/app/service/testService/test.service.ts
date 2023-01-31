import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl = "http://localhost:8090/api/daara/test";

  constructor(private http:HttpClient) { }

  //---------------CRUD eleve------------------------
  public getEleves() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eleve`);
  }

  public getEleve(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/eleve/${id}`);
  }
  
  public postEleve(eleve : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/eleve/`, eleve);
  }

  public deleteEleve(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eleve/${id}`);
  }

  //--------------CRUD employe----------------------
  public getEmployes() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interne`);
  }

  public getEmploye(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/interne/${id}`);
  }
  
  public postEmploye(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/interne/`, element);
  }

  public deleteEmploye(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/interne/${id}`);
  }

  //--------------CRUD Mensualite -------------------
  public getMensualites() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mensualite`);
  }

  public getMensualite(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mensualite/${id}`);
  }
  
  public postMensualite(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mensualite/`, element);
  }

  public deleteMensualite(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/mensualite/${id}`);
  }


  //-------------CRUD Inscription-------------------
  public getInscriptions() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inscription`);
  }

  public getInscription(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/inscription/${id}`);
  }
  
  public postInscription(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inscription/`, element);
  }

  public deleteInscription(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/inscription/${id}`);
  }


  //------------CRUD Paiement ----------------------
  public getPaiements() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paiement`);
  }

  public getPaiement(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/paiement/${id}`);
  }
  
  public postPaiement(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/paiement/`, element);
  }

  public deletePaiement(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/paiement/${id}`);
  }


  //-----------CRUD Depense-----------------------
  public getDepenses() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/depense`);
  }

  public getDepense(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/depense/${id}`);
  }
  
  public postDepense(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/depense/`, element);
  }

  public deleteDepense(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/depense/${id}`);
  }

  //------------ CRUD Bilan ---------------------
  public getBilans() : Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bilan`);
  }

  public getBilan(id : number) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bilan/${id}`);
  }
  
  public postBilan(element : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bilan/`, element);
  }

  public deleteBilan(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/bilan/${id}`);
  }
}
