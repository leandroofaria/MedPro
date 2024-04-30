import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta } from './consultaInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiceService {

  private readonly API = 'http://localhost:3000/consultas'

  constructor(private http: HttpClient) { }

  listar(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.API)
  }


  criar(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.API, consulta)
  }

  
}
