import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../app/Pages/Home/home-page.component';
import { MedicosComponent } from '../app/Pages/Medicos/medicos.component';
import { PacientesComponent } from '../app/Pages/Pacientes/pacientes.component';
import { editarMedicosComponent } from '../app/Pages/EditarMedicos/editarMedicos.component';
import { CrearMedicosComponent } from '../app/Pages/CrearMedicos/crearMedico.component';
import { CrearPacienteComponent } from '../app/Pages/CrearPacientes/crearPaciente.component';
import { editarPacienteComponent } from '../app/Pages/EditarPacientes/editarPaciente.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'medicos', component: MedicosComponent},
  { path: 'crearDoctor', component: CrearMedicosComponent},
  { path: 'pacientes', component: PacientesComponent },
  { path: 'crearPaciente', component: CrearPacienteComponent},
  { path: 'pacientes/editarPaciente/:numDoc', component: editarPacienteComponent},
  { path: 'medicos/editarDoctor/:num', component: editarMedicosComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
