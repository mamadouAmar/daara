import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBilanComponent } from './components/comptabilite/page-bilan/page-bilan.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageDepenseComponent } from './components/depense/page-depense/page-depense.component';
import { AjoutEleveComponent } from './components/eleve/ajout-eleve/ajout-eleve.component';
import { ListElevesComponent } from './components/eleve/list-eleves/list-eleves.component';
import { PageEleveComponent } from './components/eleve/page-eleve/page-eleve.component';
import { PageEmployeComponent } from './components/employe/page-employe/page-employe.component';

const routes: Routes = [
  {path : 'connexion', component: ConnexionComponent},
  {path : 'eleve', component: PageEleveComponent, 
  children : [
    {path: '', component:ListElevesComponent},
    {path: 'ajout-edit', component:AjoutEleveComponent},
    {path: ':id'},
    
  ]  
},
  {path : 'employe',
  children : [
    {path: ''},
    {path: 'ajout-edit'},
    {path: ':id'}
  ]},
  {path: '', component: DashboardComponent},
  {path: 'bilan', component:PageBilanComponent,
  children: [
    {path:'mensualite'},
    {path: 'inscription'},
    {path: 'paiement'},
    {path: 'depense', redirectTo:'/depense'},
    {path: 'calcul'}
  ]},
  {path:'depense',
  children: [
    {path: ''},
    {path: 'ajout-edit'},
    {path: ':id'}
  ]}
];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
