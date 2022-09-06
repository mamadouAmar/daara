import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './components/comptabilite/inscription/inscription.component';
import { MensualiteComponent } from './components/comptabilite/mensualite/mensualite.component';
import { PageBilanComponent } from './components/comptabilite/page-bilan/page-bilan.component';
import { PaiementsComponent } from './components/comptabilite/paiements/paiements.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AjoutDepenseComponent } from './components/depense/ajout-depense/ajout-depense.component';
import { ListDepenseComponent } from './components/depense/list-depense/list-depense.component';
import { ViewDepenseComponent } from './components/depense/view-depense/view-depense.component';
import { InscrireEleveComponent } from './components/eleve/inscrire-eleve/inscrire-eleve.component';
import { ListElevesComponent } from './components/eleve/list-eleves/list-eleves.component';
import { PayerMensualiteEleveComponent } from './components/eleve/payer-mensualite-eleve/payer-mensualite-eleve.component';
import { ViewEleveComponent } from './components/eleve/view-eleve/view-eleve.component';
import { AjoutEmployeComponent } from './components/employe/ajout-employe/ajout-employe.component';
import { ListEmployesComponent } from './components/employe/list-employes/list-employes.component';
import { PayerEmployeComponent } from './components/employe/payer-employe/payer-employe.component';
import { ViewEmployeComponent } from './components/employe/view-employe/view-employe.component';

const routes: Routes = [
  {path : 'connexion', component: ConnexionComponent},
  {path : 'eleve', 
  children : [
    {path: '', component:ListElevesComponent},
    {path: 'inscrire', component:InscrireEleveComponent},
    {path: 'mensualite', component:PayerMensualiteEleveComponent},
    {path: ':id', component: ViewEleveComponent},
  ]  
},
  {path : 'employe',
  children : [
    {path: '', component: ListEmployesComponent},
    {path: 'nouvel-employe', component: AjoutEmployeComponent},
    {path: 'payer-employe', component: PayerEmployeComponent},
    {path: ':id', component: ViewEmployeComponent},
  ]},
  {path: '', component: DashboardComponent},
  {path: 'bilan',
  children: [
    {path:'mensualite', component: MensualiteComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'paiement', component: PaiementsComponent},
    {path: 'depense', component: ListDepenseComponent},
    {path: '',  component:PageBilanComponent}
  ]},
  {path:'depense',
  children: [
    {path: '', component: ListDepenseComponent},
    {path: 'ajout-edit', component: AjoutDepenseComponent},
    {path: ':id', component: ViewDepenseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
