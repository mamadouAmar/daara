import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from 'src/app/models/eleve';
import { Niveau } from 'src/app/models/niveau';
import { EleveService } from 'src/app/service/eleve.service';
import { NiveauService } from 'src/app/service/niveau.service';
import { TestService } from 'src/app/service/testService/test.service';
import { PayerMensualiteDialogComponent } from '../../modals/payer-mensualite-dialog/payer-mensualite-dialog.component';
import { ReinscriptionDialogComponent } from '../../modals/reinscription-dialog/reinscription-dialog.component';

@Component({
  selector: 'app-view-eleve',
  templateUrl: './view-eleve.component.html',
  styleUrls: ['./view-eleve.component.css']
})
export class ViewEleveComponent implements OnInit {

  modifier : boolean = false;

  idEleve! : number;
  eleve! : Eleve;
  age! : number;

  classes : Niveau[] = [];

  eleveFormgroup! : FormGroup;

  constructor(private  eleveService : EleveService,
    private niveauService : NiveauService,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router,
    private fb : FormBuilder,
    public dialog : MatDialog, 
    private testService : TestService) {
    this.eleve = new Eleve();

    this.idEleve = this.route.snapshot.params['id'];
    this.testService.getEleve(this.idEleve)
      .subscribe(
        (eleve) => {
          this.eleve = eleve;
          console.log(eleve);
          this.eleveFormgroup.controls['prenom'].setValue(this.eleve.prenom)
          this.eleveFormgroup.controls['nom'].setValue(this.eleve.nom)
          this.eleveFormgroup.controls['dateNaissance'].setValue(this.eleve.dateNaissance)
          this.eleveFormgroup.controls['prenomPere'].setValue(this.eleve.prenomPere)
          this.eleveFormgroup.controls['prenomNomMere'].setValue(this.eleve.prenomNomMere)
          this.eleveFormgroup.controls['aSavoir'].setValue(this.eleve.aSavoir)
          this.eleveFormgroup.controls['dateDebut'].setValue(this.eleve.dateDebut)
          this.eleveFormgroup.controls['classe'].setValue(this.eleve.classe)
        }
      );

      this.eleveFormgroup = this.fb.group(
        {
          prenom : this.fb.control('', [Validators.required]),
          nom : this.fb.control(this.eleve.nom, [Validators.required]),
          dateNaissance : this.fb.control('', [Validators.required]),
          adresse : this.fb.control('', [Validators.required]),
          prenomPere : this.fb.control('', [Validators.required]),
          prenomNomMere : this.fb.control('', [Validators.required]),
          aSavoir : this.fb.control('', [Validators.required]),
          dateDebut : this.fb.control(''),
          classe : this.fb.control(''),
        }
      );
    
      niveauService.getAll()
        .subscribe(
          (data) => {
            this.classes = data;
          }
        )
      
  }

  ngOnInit(): void {
    
    if(!this.modifier){
      this.eleveFormgroup.disable();
    }
  }

  modifierEleve(){
    this.modifier = true;
    this.eleveFormgroup.enable();
  }

  payerMensualite(){
    const dialogRef = this.dialog.open(
      PayerMensualiteDialogComponent, {
        data : this.idEleve
      }
    )

    dialogRef.afterClosed()
      .subscribe(

      )
  }

  supprimerEleve(){
    this.eleveService.delete(this.idEleve)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/eleve']);
        }
      )
  }

  reinscrireEleve(){
    const dialogRef = this.dialog.open(
      ReinscriptionDialogComponent, {
        data : this.idEleve
      }
    )

    dialogRef.afterClosed()
      .subscribe(

      )
  }

  retour(){
    this.location.back()
  }

  enregistrer() {
    this.eleveService.postOne(this.eleve)
      .subscribe(
        (data) => {
          console.log(data);
          this.modifier = false;
          this.eleveFormgroup.disable();
          this.router.navigate([`/eleve/${this.eleve.eleveId}`]);
        }
      )
  }

}
