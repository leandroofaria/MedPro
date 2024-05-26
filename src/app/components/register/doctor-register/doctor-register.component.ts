import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {

  registerObj: any = {
    "nome": "",
    "email": "",
    "senha": "",
    "telefone": "",
    "crm": "",
    "endereco": "",
    "especialidade": ""
  }

  constructor(private http: HttpClient, private router: Router) { }

  onRegister() {
    this.http.post('http://localhost:8080/medicos/cadastro', this.registerObj).pipe(
      catchError(error => {
        console.log(error);
        alert('Erro ao cadastrar usuário');
        return throwError('Erro ao cadastrar usuário');
      })
    ).subscribe(() => {
      this.router.navigateByUrl('/login'); 
    });
  }

}
