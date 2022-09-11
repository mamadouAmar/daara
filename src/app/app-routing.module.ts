import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './components/archive/dossier/inscription/inscription.component';
import { MensualiteComponent } from './components/archive/dossier/mensualite/mensualite.component';
import { PageBilanComponent } from './components/comptabilite/page-bilan/page-bilan.component';
import { PaiementsComponent } from './components/archive/dossier/paiements/paiements.component';
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
import { ElevesComponent } from './components/archive/dossier/eleves/eleves.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AfficherBilanComponent } from './components/comptabilite/afficher-bilan/afficher-bilan.component';

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
  {path: 'archive', component: ArchiveComponent,
  children: [
    {path:'', component: ElevesComponent},
    {path:'mensualites', component: MensualiteComponent},
    {path: 'inscriptions', component: InscriptionComponent},
    {path: 'paiements', component: PaiementsComponent},
    {path: 'depenses', component: ListDepenseComponent},
    {path: 'eleves',  component:ElevesComponent},
    {path: 'employes',  component:ElevesComponent},
  ]},
  {path:'depense',
  children: [
    {path: '', component: ListDepenseComponent},
    {path: 'ajout-edit', component: AjoutDepenseComponent},
    {path: ':id', component: ViewDepenseComponent}
  ]},
  {path : 'bilan', component : PageBilanComponent,
  children : [
    {path: ':id', component: AfficherBilanComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule. forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
