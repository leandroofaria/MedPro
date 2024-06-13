import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from '../../services/consultation/consultation.service';

@Component({
  selector: 'app-edit-consultation',
  templateUrl: './edit-consultation.component.html',
  styleUrls: ['./edit-consultation.component.css']
})
export class EditConsultationComponent implements OnInit {
  consultaForm!: FormGroup;
  consultaId!: string;

  constructor(
    private consultationService: ConsultationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.consultaId = this.route.snapshot.paramMap.get('id') || '';
    this.consultaForm = this.fb.group({
      data_consulta: ['', [Validators.required, this.dataValida]],
      horario: ['', [Validators.required, this.horarioValido]]
    });

    this.consultationService.getConsultaById(this.consultaId).subscribe((consulta: any) => {
      this.consultaForm.patchValue({
        data_consulta: consulta.data.split('T')[0],
        horario: consulta.data.split('T')[1]
      });
    });
  }

  dataValida(control: any) {
    const data = new Date(control.value);
    const hoje = new Date();

    if (data <= hoje) {
      return { dataInvalida: true };
    }

    const diaSemana = data.getDay();
    if (diaSemana === 5 || diaSemana === 6) {
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

  editarConsulta() {
    if (this.consultaForm && this.consultaForm.valid) {
      const formValue = this.consultaForm.value;
      const dadosAtualizacao = {
        idConsulta: this.consultaId,
        novaData: `${formValue.data_consulta}T${formValue.horario}`
      };

      this.consultationService.atualizarConsulta(dadosAtualizacao).subscribe(
        response => {
          console.log('Consulta atualizada com sucesso:', response);
          this.router.navigate(['/user-home']);
        },
        error => {
          console.error('Erro ao atualizar consulta:', error);
        }
      );
    }
  }
}
