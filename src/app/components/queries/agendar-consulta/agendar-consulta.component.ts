import { Component } from '@angular/core';
import { Consulta } from '../consultaInterface';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent {

  consulta: Consulta = {
    id: 1,
    especialidade: 'Cardiologista',
    doutor: 'Pedro',
    data: '03/04/2024',
    horario: '13:22'
  }

  formatarData(data: string): string {
    const partesData = data.split('/');
    const dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`;
    return dataFormatada;
  }

  formatarHorario(horario: string): string {
    const partesHorario = horario.split(':');
    const horarioFormatado = `${partesHorario[0]}:${partesHorario[1]}`;
    return horarioFormatado;
  }

  agendarConsulta() {
    alert('Nova consulta')
  }

}
