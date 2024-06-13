import { ConsultationService } from './../../services/consultation/consultation.service';
import { Component, OnInit } from '@angular/core';

// Define a interface para o objeto de consulta
interface Consulta {
  id: string,
  nome: string;
  especialidade: string;
  data: string;
}


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  listaConsultas: any[] = [];
  userType: string = '';

  constructor(private consultationService: ConsultationService) {}

  ngOnInit() {
    const userId = localStorage.getItem('IdUser');
    this.userType = localStorage.getItem('tipo') || '';

    if (userId) {
      if (this.userType === 'paciente') {
        this.consultationService.getConsultasPorPaciente(userId).subscribe(data => {
          this.listaConsultas = data;
        });
      } else if (this.userType === 'medico') {
        this.consultationService.getConsultasPorMedico(userId).subscribe(data => {
          this.listaConsultas = data;
        });
      }
    }
  }
}
