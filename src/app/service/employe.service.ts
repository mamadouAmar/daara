import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.apiUrl}/employe`);
  }

  public getOne(id : Number) : Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/employe/${id}`);
  }

  public postOne(corps : Employe) : Observable<Employe> {
    return this.http.post<Employe>(`${this.apiUrl}/employe`, corps);
  }

  public delete(id : Number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employe/${id}`); 
  }
}
