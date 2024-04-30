import { Component } from '@angular/core';
import { Consulta } from '../consultaInterface';
import { ConsultaServiceService } from '../consulta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent {

  consulta: Consulta = {
    especialidade: '',
    doutor: '',
    data: '',
    horario: ''
  }

  constructor(
    private service: ConsultaServiceService,
    private router: Router
  ) {}

  

  agendarConsulta() {
    this.service.criar(this.consulta).subscribe(() => this.router.navigate(['/listarconsulta'] ))
  }

}
