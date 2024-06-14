import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationService } from '../../services/consultation/consultation.service';

@Component({
  selector: 'app-schedule-consultation',
  templateUrl: './schedule-consultation.component.html',
  styleUrls: ['./schedule-consultation.component.css']
})
export class ScheduleConsultationComponent implements OnInit {

  medicos: any[] = [];
  consultaForm!: FormGroup;

  constructor(
    private consultationService: ConsultationService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.consultationService.getMedicos().subscribe((data: any[]) => {
      this.medicos = data;
    });

    this.consultaForm = this.fb.group({
      doutor: ['', Validators.required],
      data_consulta: ['', [Validators.required, this.dataValida]],
      horario: ['', [Validators.required, this.horarioValido]]
    });
  }

  dataValida(control: any) {
    const data = new Date(control.value);
    const hoje = new Date();

    if (data <= hoje) {
      return { dataInvalida: true };
    }

    const diaSemana = data.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
      return { 'fimDeSemana': true };
    }

    return null;
  }

  horarioValido(control: any) {
    const horaMinima = 8; // Horário mínimo permitido
    const horaMaxima = 18; // Horário máximo permitido

    const horario = control.value.split(':');
    const hora = parseInt(horario[0]);

    if (hora < horaMinima || hora >= horaMaxima) {
      return { horarioInvalido: true };
    }

    return null;
  }

  agendarConsulta() {
    if (this.consultaForm && this.consultaForm.valid) {
      const formValue = this.consultaForm.value;
      const medicoSelecionado = this.medicos.find(medico => medico.id.toString() === formValue.doutor.toString());

      if (!medicoSelecionado) {
        console.error('Médico selecionado não encontrado.');
        return;
      }

      const idPaciente = localStorage.getItem('IdUser');
      const nomePaciente = localStorage.getItem('NomeUser'); 
      const dadosAgendamento = {
        idPaciente: idPaciente,
        nomePaciente: nomePaciente,
        idMedico: formValue.doutor,
        data: `${formValue.data_consulta}T${formValue.horario}`,
        especialidade: medicoSelecionado.especialidade,
        nome: medicoSelecionado.nome
      };

      console.log('Dados de agendamento:', dadosAgendamento);

      this.consultationService.agendarConsulta(dadosAgendamento).subscribe(
        response => {
          console.log('Consulta agendada com sucesso:', response);
          this.router.navigate(['/user-home']);
        },
        error => {
          console.error('Erro ao agendar consulta:', error);
        }
      );
    }
  }
}
