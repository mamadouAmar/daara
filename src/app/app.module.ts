import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ListElevesComponent } from './components/eleve/list-eleves/list-eleves.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEmployesComponent } from './components/employe/list-employes/list-employes.component';
import { AjoutEmployeComponent } from './components/employe/ajout-employe/ajout-employe.component';
import { AjoutDepenseComponent } from './components/depense/ajout-depense/ajout-depense.component';
import { ListDepenseComponent } from './components/depense/list-depense/list-depense.component';
import { MatTabLink, MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PageBilanComponent } from './components/comptabilite/page-bilan/page-bilan.component';
import { InscriptionComponent } from './components/archive/dossier/inscription/inscription.component';
import { PaiementsComponent } from './components/archive/dossier/paiements/paiements.component';
import { ViewDepenseComponent } from './components/depense/view-depense/view-depense.component';
import { ViewEleveComponent } from './components/eleve/view-eleve/view-eleve.component';
import { PayerMensualiteEleveComponent } from './components/eleve/payer-mensualite-eleve/payer-mensualite-eleve.component';
import { ViewEmployeComponent } from './components/employe/view-employe/view-employe.component';
import { PayerEmployeComponent } from './components/employe/payer-employe/payer-employe.component';
import { ListClassesComponent } from './components/classes/list-classes/list-classes.component';
import { MensualiteComponent } from './components/archive/dossier/mensualite/mensualite.component';
import { InscrireEleveComponent } from './components/eleve/inscrire-eleve/inscrire-eleve.component';
import { ViewClasseComponent } from './components/classes/view-classe/view-classe.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ArchiveComponent } from './components/archive/archive.component';
import { ElevesComponent } from './components/archive/dossier/eleves/eleves.component';
import { EmployesComponent } from './components/archive/dossier/employes/employes.component';
import { FormulaireCalculBilanComponent } from './components/comptabilite/formulaire-calcul-bilan/formulaire-calcul-bilan.component';
import { ListCalculBilanComponent } from './components/comptabilite/list-calcul-bilan/list-calcul-bilan.component';
import { AfficherBilanComponent } from './components/comptabilite/afficher-bilan/afficher-bilan.component';
import { EntreesComponent } from './components/archive/dossier/entrees/entrees.component';
import { SortiesComponent } from './components/archive/dossier/sorties/sorties.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ListElevesComponent,
    ListEmployesComponent,
    AjoutEmployeComponent,
    AjoutDepenseComponent,
    ListDepenseComponent,
    ConnexionComponent,
    PageBilanComponent,
    MensualiteComponent,
    InscriptionComponent,
    PaiementsComponent,
    ViewDepenseComponent,
    ViewEleveComponent,
    PayerMensualiteEleveComponent,
    ViewEmployeComponent,
    PayerEmployeComponent,
    ListClassesComponent,
    InscrireEleveComponent,
    ViewClasseComponent,
    ArchiveComponent,
    ElevesComponent,
    EmployesComponent,
    FormulaireCalculBilanComponent,
    ListCalculBilanComponent,
    AfficherBilanComponent,
    EntreesComponent,
    SortiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule, 
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
