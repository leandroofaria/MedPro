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
  listaConsultas: Consulta[] = [];
  idUser: string | null = '';

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('IdUser');
    if (this.idUser) {
      this.consultationService.getConsultasPorPaciente(this.idUser).subscribe(
        (data: Consulta[]) => {
          this.listaConsultas = data;
        },
        (error) => {
          console.error('Erro ao obter consultas:', error);
        }
      );
    }
  }
}
