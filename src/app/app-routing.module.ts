import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'doctor-register', component: DoctorRegisterComponent},

  {path:'user-profile', component: UserProfileComponent},
  {path:'user-home', component: ListCardComponent},

  {path:'schedule', component: ScheduleConsultationComponent},
  {path:'edit/:id', component: EditConsultationComponent},
  {path:'delete/:id', component: DeleteConsultationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
