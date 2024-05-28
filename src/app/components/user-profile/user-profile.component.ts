import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userType: string | null = null;
  userDetails: any = {};
  userId: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.userType = localStorage.getItem('tipo');
    this.userId = localStorage.getItem('IdUser');
    this.fetchUserDetails();
  }

  fetchUserDetails() {
  //  o if funciona assim: primeiro vai procurar pelo tipo do usuário, e em seguida, o id
    if (this.userType === 'medico' && this.userId) {
      this.http.get<any>(`http://localhost:8080/medicos/${this.userId}`).subscribe(
        (res) => {
          this.userDetails = res;
        },
        (error) => {
          console.error('Erro ao buscar os detalhes do médico:', error);
        }
      );
    } else if (this.userType === 'paciente' && this.userId) {
      this.http.get<any>(`http://localhost:8080/pacientes/${this.userId}`).subscribe(
        (res) => {
          this.userDetails = res;
        },
        (error) => {
          console.error('Erro ao buscar os detalhes do paciente:', error);
        }
      );
    } else {
      console.error('Tipo de usuário inválido ou ID de usuário ausente.');
    }
  }
}
