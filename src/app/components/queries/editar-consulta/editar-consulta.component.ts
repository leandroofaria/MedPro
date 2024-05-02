import { Component } from '@angular/core';
import { Consulta } from '../consultaInterface';
import { ConsultaServiceService } from '../consulta-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent {

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

  editarConsulta() {
    this.service.editar(this.consulta).subscribe(() => {
        this.router.navigate(['/listarconsulta'])
})
}



}
