import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorRegisterComponent } from './components/register/doctor-register/doctor-register.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ListCardComponent } from './components/consultation/list-card/list-card.component';
import { ScheduleConsultationComponent } from './components/consultation/schedule-consultation/schedule-consultation.component';
import { EditConsultationComponent } from './components/consultation/edit-consultation/edit-consultation.component';
import { DeleteConsultationComponent } from './components/consultation/delete-consultation/delete-consultation.component';
import { ConsultationCardComponent } from './components/consultation/consultation-card/consultation-card.component';
import { AuthService } from './components/services/authentication/authentication.service';
import { AuthGuard } from './components/services/auth.guard.service';
import { CostumeInterceptor } from './components/services/interceptor/costume.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DoctorRegisterComponent,
    UserHomeComponent,
    UserProfileComponent,
    ListCardComponent,
    ScheduleConsultationComponent,
    EditConsultationComponent,
    DeleteConsultationComponent,
    ConsultationCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: CostumeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
