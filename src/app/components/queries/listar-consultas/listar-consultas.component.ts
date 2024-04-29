  import { Component } from '@angular/core';

  @Component({
    selector: 'app-listar-consultas',
    templateUrl: './listar-consultas.component.html',
    styleUrls: ['./listar-consultas.component.css']
  })
  export class ListarConsultasComponent {

    listaConsultas = [
        {id: '1',
        especialidade: 'Cardiologista',
        doutor: 'Pedro',
        data: '03/04/2024',
        horario: '13:22'},
        
        {id: '2',
        especialidade: 'Endocrino',
        doutor: 'Joao',
        data: '12/05/2024',
        horario: '18:22'}, 

        {id: '1',
        especialidade: 'Cardiologista',
        doutor: 'Pedro',
        data: '03/04/2024',
        horario: '13:22'},

        {id: '1',
        especialidade: 'Cardiologista',
        doutor: 'Pedro',
        data: '03/04/2024',
        horario: '13:22'},

        {id: '1',
        especialidade: 'Cardiologista',
        doutor: 'Pedro',
        data: '03/04/2024',
        horario: '13:22'},

      
      
    ]

  }
