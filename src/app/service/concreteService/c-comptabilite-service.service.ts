import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bilan } from 'src/app/models/bilan';
import { Depense } from 'src/app/models/depense';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CComptabiliteServiceService {

  private apiUrl = `${environment.apiBaseUrl}/v1/comptabilite`;

  constructor(private http:HttpClient) { }

  public enregistrerDepense(
    depense : Depense
  ) : Observable<Depense>
  {
    return this.http.post<Depense>(`${this.apiUrl}/depense`,depense)
  }

  public recupererDepenses(
  ) : Observable<Depense[]>
  {
    return this.http.get<Depense[]>(
      `${this.apiUrl}/depense`)
  }

  public recupererDepensesByInterval(
    debut : Date,
    fin : Date
    ) : Observable<Depense[]>
  {
      let params = new HttpParams(
        {
          fromObject : {
            debut: debut.toString(),
            fin: fin.toDateString()
          }
        }
      )
      return this.http.get<Depense[]>(
        `${this.apiUrl}/depense`,
        {params : params})
  }

  public supprimerDepense(
    id : string
    ) : Observable<Boolean>
  {
      return this.http.delete<Boolean>(
        `${this.apiUrl}/depense/${id}`)
  }

  public recupererBilan(
    ) : Observable<Bilan[]>
    {
      return this.http.get<Bilan[]>(
        `${this.apiUrl}/bilan`)
    }

    public calculerBilan(
      debut : Date,
      fin : Date
      ) : Observable<Bilan>
    {
        let params = new HttpParams(
          {
            fromObject : {
              debut: debut.toString(),
              fin: fin.toDateString()
            }
          }
        )
        return this.http.post<Bilan>(
          `${this.apiUrl}/bilan`, null, {params : params})
    }

    public supprimerBilan(
      id : string
      ) : Observable<Boolean>
      {
        return this.http.delete<Boolean>(
          `${this.apiUrl}/bilan/${id}`)
      }
}
