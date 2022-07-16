import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBilanComponent } from './components/comptabilite/page-bilan/page-bilan.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageDepenseComponent } from './components/depense/page-depense/page-depense.component';
import { PageEleveComponent } from './components/eleve/page-eleve/page-eleve.component';
import { PageEmployeComponent } from './components/employe/page-employe/page-employe.component';

const routes: Routes = [
  {path : 'connexion', component: ConnexionComponent},
  {path : 'eleve', component: PageEleveComponent},
  {path : 'employe', component: PageEmployeComponent},
  {path: '', component: DashboardComponent},
  {path: 'bilan', component:PageBilanComponent},
  {path:'depense', component:PageDepenseComponent}
];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
