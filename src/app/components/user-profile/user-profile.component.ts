import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  userImage: SafeUrl | undefined = undefined;
  selectedFile: File | null = null;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.userType = localStorage.getItem('tipo');
    this.userId = localStorage.getItem('IdUser');

    if (this.userType && this.userId) {
      this.fetchUserDetails();
      this.fetchUserImage();
    } else {
      console.error('Tipo de usuário ou ID de usuário ausentes.');
    }
  }

  fetchUserDetails() {
    if (!this.userType || !this.userId) {
      console.error('Tipo de usuário ou ID de usuário ausentes.');
      return;
    }

    let url = '';
    if (this.userType === 'medico') {
      url = `http://localhost:8080/medicos/${this.userId}`;
    } else if (this.userType === 'paciente') {
      url = `http://localhost:8080/pacientes/${this.userId}`;
    }

    if (url) {
      this.http.get<any>(url).subscribe(
        (res) => {
          this.userDetails = res || {}; // Garante que userDetails não seja null
        },
        (error) => {
          console.error('Erro ao buscar os detalhes do usuário:', error);
        }
      );
    }
  }

  fetchUserImage() {
    if (!this.userType || !this.userId) {
      console.error('Tipo de usuário ou ID de usuário ausentes.');
      return;
    }

    let url = '';
    if (this.userType === 'medico') {
      url = `http://localhost:8080/medicos/image/${this.userId}`;
    } else if (this.userType === 'paciente') {
      url = `http://localhost:8080/pacientes/image/${this.userId}`;
    }

    if (url) {
      this.http.get<any>(url).subscribe(
        (res) => {
          this.userImage = this.sanitizer.bypassSecurityTrustUrl(res.url + '?t=' + new Date().getTime());
        },
        (error) => {
          console.error('Erro ao buscar a imagem do usuário:', error);
        }
      );
    }
  }

  uploadUserImage() {
    if (!this.selectedFile || !this.userId) {
      console.error('Arquivo selecionado ou ID de usuário ausentes.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    let url = '';
    if (this.userType === 'medico') {
      url = `http://localhost:8080/medicos/image/${this.userId}`;
    } else if (this.userType === 'paciente') {
      url = `http://localhost:8080/pacientes/image/${this.userId}`;
    }

    this.http.post(url, formData, { responseType: 'text' }).subscribe(
      (response) => {
        console.log('Imagem carregada com sucesso:', response);
        this.fetchUserImage();
      },
      (error) => {
        console.error('Erro ao carregar a imagem:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  toggleEdit() {
    this.editing = !this.editing;
    this.updatedUserDetails = { ...this.userDetails };
  }

  updateUserProfile() {
    if (!this.userId) {
      console.error('ID de usuário ausente.');
      return;
    }

    delete this.updatedUserDetails.senha;
    this.updatedUserDetails.id = this.userId;

    let url = '';
    if (this.userType === 'medico') {
      url = `http://localhost:8080/medicos`;
    } else if (this.userType === 'paciente') {
      url = `http://localhost:8080/pacientes`;
    }

    this.http.put<any>(url, this.updatedUserDetails).subscribe(
      (res) => {
        this.userDetails = res;
        this.editing = false; 
        this.fetchUserDetails();
      },
      (error) => {
        console.error('Erro ao atualizar os detalhes do usuário:', error);
      }
    );
  }

  deleteUserProfile() {
    if (!this.userId) {
      console.error('ID de usuário ausente.');
      return;
    }
  
    if (confirm('Tem certeza de que deseja excluir seu perfil?')) {
      let url = '';
      if (this.userType === 'medico') {
        url = `http://localhost:8080/medicos/${this.userId}`;
      } else if (this.userType === 'paciente') {
        url = `http://localhost:8080/pacientes/${this.userId}`;
      }
  
      if (!url) {
        console.error('URL de exclusão não está definida corretamente.');
        return;
      }
  
      this.http.delete(url).subscribe(
        () => {
          console.log('Perfil excluído com sucesso.');
          localStorage.clear();
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro ao excluir o perfil:', error);
        }
      );
    }
  }
}
