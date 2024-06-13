import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ComponentsComponent } from './components/components.component';
import { DoctorRegisterComponent } from './components/register/doctor-register/doctor-register.component';
import { CostumeInterceptor } from './components/services/interceptor/costume.interceptor';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DeleteProfileComponent } from './components/user-profile/delete-profile/delete-profile.component';
import { ConsultationCardComponent } from './components/consultation/consultation-card/consultation-card.component';
import { ListCardComponent } from './components/consultation/list-card/list-card.component';
import { AuthService } from './components/services/authentication/authentication.service';
import { ConsultationService } from './components/services/consultation/consultation.service';
import { ScheduleConsultationComponent } from './components/consultation/schedule-consultation/schedule-consultation.component';
import { EditConsultationComponent } from './components/consultation/edit-consultation/edit-consultation.component';
import { DeleteConsultationComponent } from './components/consultation/delete-consultation/delete-consultation.component';

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
    DoctorRegisterComponent,
    UserHomeComponent,
    UserProfileComponent,
    DeleteProfileComponent,
    ConsultationCardComponent,
    ListCardComponent,
    ScheduleConsultationComponent,
    EditConsultationComponent,
    DeleteConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ConsultationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CostumeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
