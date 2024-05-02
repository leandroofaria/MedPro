import { Component } from '@angular/core';
import { ConsultaServiceService } from '../consulta-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from '../consultaInterface';

@Component({
  selector: 'app-excluir-consulta',
  templateUrl: './excluir-consulta.component.html',
  styleUrls: ['./excluir-consulta.component.css']
  })

export class ExcluirConsultaComponent {

  consulta: Consulta = {
    especialidade: '',
    doutor: '',
    data: '',
    horario: ''
  }

  constructor(
    private service: ConsultaServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((consulta) => {
        this.consulta = consulta
    })
}

excluirConsulta() {
  if(this.consulta.id) {
      this.service.excluir(this.consulta.id).subscribe(() => {
          this.router.navigate(['/listarconsulta'])
      })
  }
}

cancelar() {
  this.router.navigate(['/listarconsulta'])
}


}
