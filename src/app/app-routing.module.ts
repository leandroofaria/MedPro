import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AgendarConsultaComponent } from './components/queries/agendar-consulta/agendar-consulta.component';
import { ListarConsultasComponent } from './components/queries/listar-consultas/listar-consultas.component';
import { ExcluirConsultaComponent } from './components/queries/excluir-consulta/excluir-consulta.component';
import { EditarConsultaComponent } from './components/queries/editar-consulta/editar-consulta.component';
import { DoctorRegisterComponent } from './components/register/doctor-register/doctor-register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'doctor-register', component: DoctorRegisterComponent},

  {path:'user-profile', component: UserProfileComponent},
  {path:'user-home', component: UserHomeComponent},




  {path:'agendarconsulta', component: AgendarConsultaComponent},
  {path: 'listarconsulta', component: ListarConsultasComponent},
  {path: 'queries/excluirConsulta/:id', component: ExcluirConsultaComponent},
  {path: 'queries/editarConsulta/:id', component: EditarConsultaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
