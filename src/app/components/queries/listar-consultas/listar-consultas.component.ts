  import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consultaInterface';
import { ConsultaServiceService } from '../consulta-service.service';

  @Component({
    selector: 'app-listar-consultas',
    templateUrl: './listar-consultas.component.html',
    styleUrls: ['./listar-consultas.component.css']
  })

  export class ListarConsultasComponent {

    listaConsultas: Consulta[] = []

    constructor(private service: ConsultaServiceService){

    }

    ngOnInit(): void {
      this.service.listar().subscribe((listaConsultas) => {
        this.listaConsultas = listaConsultas
      })
    }

  }
