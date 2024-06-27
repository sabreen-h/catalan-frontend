import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AuthComponent } from './components/account/auth/auth.component';
import { DefaultComponent } from './admin-side/layouts/default/default.component';
import { ViewSpecializationComponent } from './admin-side/specializations/view-specialization/view-specialization.component';
import { ViewDoctorComponent } from './admin-side/doctor/view-doctor/view-doctor.component';
import { ViewReciptionistComponent } from './admin-side/reciptionist/view-reciptionist/view-reciptionist.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPatientComponent } from './admin-side/patient/view-patient/view-patient.component';
import { ViewAppointmentComponent } from './admin-side/appointment/view-appointment/view-appointment.component';
import { ViewDoctorAppointmentComponent } from './admin-side/doctor-appointment/view-doctor-appointment/view-doctor-appointment.component';
import { ViewWorkingScheduleComponent } from './admin-side/doctor-appointment/view-working-schedule/view-working-schedule.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'auth' , component:AuthComponent},
  {path:'' , component:DefaultComponent,
    children:[{
      path:'' ,
      component:ViewSpecializationComponent,
    },
    {path:'doctor' , component:ViewDoctorComponent},
    {path:'reciptionist' , component:ViewReciptionistComponent},
    {path:'profile' , component:ProfileComponent},
    {path:'patient' , component:ViewPatientComponent},
    {path:'appointment' , component:ViewAppointmentComponent},
    {path:'doctor-appointment' , component:ViewDoctorAppointmentComponent},
    {path:'working-schedule' , component:ViewWorkingScheduleComponent},




  
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
