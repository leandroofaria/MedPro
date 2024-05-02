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

  editar(consulta: Consulta): Observable<Consulta> {
    const url = `${this.API}/${consulta.id}`
    return this.http.put<Consulta>(url, consulta )
}

  excluir(id: number): Observable<Consulta> {
    const url = `${this.API}/${id}`
    return this.http.delete<Consulta>(url)
}

buscarPorId(id: number): Observable<Consulta> {
  const url = `${this.API}/${id}`
  return this.http.get<Consulta>(url)
}

  
}
