import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getConsultasPorPaciente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/consultas/paciente/${id}`);
  }

  getMedicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/medicos`);
  }

  agendarConsulta(dadosAgendamento: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/consultas`, dadosAgendamento);
  }
}
