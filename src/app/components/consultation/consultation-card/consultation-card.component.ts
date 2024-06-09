import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Consulta {
  nome: string;
  especialidade: string;
  data: string;
}

@Component({
  selector: 'app-consultation-card',
  templateUrl: './consultation-card.component.html',
  styleUrls: ['./consultation-card.component.css'],
  providers: [DatePipe]
})
export class ConsultationCardComponent {
  @Input() consulta: Consulta = {
    nome: '',
    especialidade: '',
    data: ''
  };
  

  constructor(private datePipe: DatePipe) {}

  getFormattedDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy - HH:mm') || '';
  }
}
