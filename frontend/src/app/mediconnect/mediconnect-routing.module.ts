import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientCreateComponent } from '../mediconnect/components/patientcreate/patientcreate.component';
import { DoctorCreateComponent } from "./components/doctorcreate/doctorcreate.component";
import { DoctorEditComponent } from "./components/doctoredit/doctoredit.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
const routes: Routes = [
  { path:'patient-create', component: PatientCreateComponent},
  {path: 'doctor-create', component: DoctorCreateComponent},
  {path: 'doctor-edit',component: DoctorEditComponent},
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediConnectRoutingModule {}
