import { Component } from '@angular/core';
import { Consulta } from '../consultaInterface';
import { ConsultaServiceService } from '../consulta-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css']
})
export class AgendarConsultaComponent {


  formulario!: FormGroup;

  constructor(
    private service: ConsultaServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
    especialidade: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])],
    doutor: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])],
    data: ['', [Validators.required]],
    horario: ['', [Validators.required]]
    })
}

  agendarConsulta() {
    if(this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => this.router.navigate(['/listarconsulta'] ))
    }
  }

}
