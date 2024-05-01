import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PatienthomeComponent } from './components/pages/patienthome/patienthome.component';
import { AgendarConsultaComponent } from './components/queries/agendar-consulta/agendar-consulta.component';
import { ListarConsultasComponent } from './components/queries/listar-consultas/listar-consultas.component';
import { ExcluirConsultaComponent } from './components/queries/excluir-consulta/excluir-consulta.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'patienthome', redirectTo: 'listarconsulta', pathMatch: 'full'},
  {path:'agendarconsulta', component: AgendarConsultaComponent},
  {path: 'listarconsulta', component: ListarConsultasComponent},
  { path: 'queries/excluirConsulta/:id', component: ExcluirConsultaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
