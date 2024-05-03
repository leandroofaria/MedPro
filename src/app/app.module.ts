import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PatienthomeComponent } from './components/pages/patienthome/patienthome.component';
import { ComponentsComponent } from './components/components.component';
import { AgendarConsultaComponent } from './components/queries/agendar-consulta/agendar-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarConsultasComponent } from './components/queries/listar-consultas/listar-consultas.component';
import { ConsultaComponent } from './components/queries/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirConsultaComponent } from './components/queries/excluir-consulta/excluir-consulta.component';
import { EditarConsultaComponent } from './components/queries/editar-consulta/editar-consulta.component';
import { CadastrarMedicoComponent } from './components/doctors/cadastrar-medico/cadastrar-medico.component';
import { ListarMedicosComponent } from './components/doctors/listar-medicos/listar-medicos.component';
import { EditarMedicosComponent } from './components/doctors/editar-medicos/editar-medicos.component';
import { ExcluirMedicoComponent } from './components/doctors/excluir-medico/excluir-medico.component';
import { CadastrarPacienteComponent } from './components/patients/cadastrar-paciente/cadastrar-paciente.component';
import { EditarPacienteComponent } from './components/patients/editar-paciente/editar-paciente.component';
import { ExcluirPacienteComponent } from './components/patients/excluir-paciente/excluir-paciente.component'; // Importe HttpClientModule aqui

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PatienthomeComponent,
    ComponentsComponent,
    AgendarConsultaComponent,
    ListarConsultasComponent,
    ConsultaComponent,
    ExcluirConsultaComponent,
    EditarConsultaComponent,
    CadastrarMedicoComponent,
    ListarMedicosComponent,
    EditarMedicosComponent,
    ExcluirMedicoComponent,
    CadastrarPacienteComponent,
    EditarPacienteComponent,
    ExcluirPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
