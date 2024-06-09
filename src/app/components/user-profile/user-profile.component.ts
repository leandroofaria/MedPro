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
  editing: boolean = false;
  updatedUserDetails: any = {};

  constructor(private http: HttpClient) {}

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
    console.log('Editing:', this.editing); // Adicionando console.log
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
          console.log('Editing:', this.editing); // Adicionando console.log
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
          console.log('Editing:', this.editing); // Adicionando console.log
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

}
