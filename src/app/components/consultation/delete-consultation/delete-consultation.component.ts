import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from '../../services/consultation/consultation.service';

@Component({
  selector: 'app-delete-consultation',
  templateUrl: './delete-consultation.component.html',
  styleUrls: ['./delete-consultation.component.css']
})
export class DeleteConsultationComponent implements OnInit {
  consultaId!: string;

  constructor(
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.consultaId = this.route.snapshot.paramMap.get('id') || '';
  }

  confirmarExclusao() {
    this.consultationService.excluirConsulta(this.consultaId).subscribe(
      response => {
        console.log('Consulta excluída com sucesso:', response);
        this.router.navigate(['/user-home']);
      },
      error => {
        console.error('Erro ao excluir consulta:', error);
      }
    );
  }
}
