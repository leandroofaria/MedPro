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
import { ComponentsComponent } from './components/components.component';
import { AgendarConsultaComponent } from './components/queries/agendar-consulta/agendar-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarConsultasComponent } from './components/queries/listar-consultas/listar-consultas.component';
import { ConsultaComponent } from './components/queries/consulta/consulta.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ExcluirConsultaComponent } from './components/queries/excluir-consulta/excluir-consulta.component';
import { EditarConsultaComponent } from './components/queries/editar-consulta/editar-consulta.component';
import { DoctorRegisterComponent } from './components/register/doctor-register/doctor-register.component';
import { CostumeInterceptor } from './components/services/interceptor/costume.interceptor';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ComponentsComponent,
    AgendarConsultaComponent,
    ListarConsultasComponent,
    ConsultaComponent,
    ExcluirConsultaComponent,
    EditarConsultaComponent,
    DoctorRegisterComponent,
    UserHomeComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CostumeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
