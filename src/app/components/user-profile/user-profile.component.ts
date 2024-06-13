import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userType: string | null = null;
  userDetails: any = {};
  userId: string | null = null;
  editing: boolean = false;
  updatedUserDetails: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.userType = localStorage.getItem('tipo');
    this.userId = localStorage.getItem('IdUser');
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    if (this.userType === 'medico' && this.userId) {
      this.http.get<any>(`http://localhost:8080/medicos/${this.userId}`).subscribe(
        (res) => {
          this.userDetails = res || {}; // Garante que userDetails não seja null
        },
        (error) => {
          console.error('Erro ao buscar os detalhes do médico:', error);
        }
      );
    } else if (this.userType === 'paciente' && this.userId) {
      this.http.get<any>(`http://localhost:8080/pacientes/${this.userId}`).subscribe(
        (res) => {
          this.userDetails = res || {}; // Garante que userDetails não seja null
        },
        (error) => {
          console.error('Erro ao buscar os detalhes do paciente:', error);
        }
      );
    } else {
      console.error('Tipo de usuário inválido ou ID de usuário ausente.');
    }
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.updatedUserDetails = { ...this.userDetails };
  }

  updateUserProfile() {
    delete this.updatedUserDetails.senha;

    this.updatedUserDetails.id = this.userId;

    if (this.userType === 'medico' && this.userId) {
      this.http.put<any>(`http://localhost:8080/medicos`, this.updatedUserDetails).subscribe(
        (res) => {
          this.userDetails = res;
          this.editing = false; 
          this.fetchUserDetails(); // Atualiza os detalhes do usuário após a atualização
        },
        (error) => {
          console.error('Erro ao atualizar os detalhes do médico:', error);
        }
      );
    } else if (this.userType === 'paciente' && this.userId) {
      this.http.put<any>(`http://localhost:8080/pacientes`, this.updatedUserDetails).subscribe(
        (res) => {
          this.userDetails = res;
          this.editing = false; // Define editing como false após a atualização
          this.fetchUserDetails(); // Atualiza os detalhes do usuário após a atualização
        },
        (error) => {
          console.error('Erro ao atualizar os detalhes do paciente:', error);
        }
      );
    } else {
      console.error('Tipo de usuário inválido ou ID de usuário ausente.');
    }
  }

  deleteUserProfile() {
    if (confirm('Tem certeza de que deseja excluir seu perfil?')) {
      if (this.userType === 'medico' && this.userId) {
        this.http.delete(`http://localhost:8080/medicos/${this.userId}`).subscribe(
          () => {
            console.log('Perfil do médico excluído com sucesso.');
            localStorage.clear();
            this.router.navigate(['/']); // Redireciona para a página inicial após a exclusão
          },
          (error) => {
            console.error('Erro ao excluir o perfil do médico:', error);
          }
        );
      } else if (this.userType === 'paciente' && this.userId) {
        this.http.delete(`http://localhost:8080/pacientes/${this.userId}`).subscribe(
          () => {
            console.log('Perfil do paciente excluído com sucesso.');
            localStorage.clear();
            this.router.navigate(['/']); // Redireciona para a página inicial após a exclusão
          },
          (error) => {
            console.error('Erro ao excluir o perfil do paciente:', error);
          }
        );
      } else {
        console.error('Tipo de usuário inválido ou ID de usuário ausente.');
      }
    }
  }
}
