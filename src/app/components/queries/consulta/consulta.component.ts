import { Component, Input } from '@angular/core';
import { Consulta } from '../consultaInterface';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

@Input()  consulta: Consulta = {
    id: 0,
    especialidade: 'Cardiologista',
    doutor: 'Pedro',
    data: '03/04/2024',
    horario: '13:22'
  }

}
