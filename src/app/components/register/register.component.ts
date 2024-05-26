import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerObj: any = {
    "nome": "",
    "email": "",
    "senha": "",
    "telefone": "",
    "cpf": "",
    "endereco": ""
  }

  constructor(private http: HttpClient, private router: Router) { }

  onRegister() {
    this.http.post('http://localhost:8080/pacientes/cadastro', this.registerObj).pipe(
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

