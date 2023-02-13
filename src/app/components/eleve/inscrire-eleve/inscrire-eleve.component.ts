import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Eleve } from 'src/app/models/eleve';
import { Inscription } from 'src/app/models/inscription';
import { EleveService } from 'src/app/service/eleve.service';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { Niveau } from 'src/app/models/niveau'


import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import {_rollupMoment, Moment} from 'moment';
import { Moment} from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NiveauService } from 'src/app/service/niveau.service';
import { CEleveServiceService } from 'src/app/service/concreteService/c-eleve-service.service';




@Component({
  selector: 'app-inscrire-eleve',
  templateUrl: './inscrire-eleve.component.html',
  styleUrls: ['./inscrire-eleve.component.css'],
  providers : [
  ]
})
export class InscrireEleveComponent implements OnInit {

  @Input() id? : string;

  nouvelEleve! : Eleve;
  inscription! : Inscription;

  classes! : Niveau[];

  inscriptionFormGroup! : FormGroup;

  year : number = new Date().getFullYear();


  constructor(
    private c_eleveService : CEleveServiceService,
    private eleveService : EleveService,
    private niveauService : NiveauService,
    private fb : FormBuilder,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router
    ) {
      niveauService.getAll()
        .subscribe(
          (data) => {
            this.classes = data;
            console.log(data);
          }
        )
     }

  ngOnInit(): void {
    this.inscriptionFormGroup = this.fb.group(
      {
        prenom : this.fb.control('', [Validators.required]),
        nom : this.fb.control('', [Validators.required]),
        dateNaissance : this.fb.control('', [Validators.required]),
        lieuDeNaissance : this.fb.control('', [Validators.required]),
        adresse : this.fb.control('', [Validators.required]),
        prenomPere : this.fb.control('', [Validators.required]),
        prenomNomMere : this.fb.control('', [Validators.required]),
        numeroTelephone : this.fb.control('', [Validators.required]),
        aSavoir : this.fb.control('', [Validators.required]),
        dateDebut : this.fb.control(new Date(), [Validators.required]),
        classe : this.fb.control(''),
        anneeInscription : this.fb.control(this.year, [Validators.required]), 
        somme : this.fb.control(''),
      }
    );
  }


  inscrireEleve(){
    if(this.inscriptionFormGroup.valid){
      this.nouvelEleve = new Eleve(
        // {
        //   prenom : this.inscriptionFormGroup.controls['prenom'].value,
        //   nom : this.inscriptionFormGroup.controls['nom'].value,
        //   dateNaissance: this.inscriptionFormGroup.controls['dateNaissance'].value,
        //   dateDebut: this.inscriptionFormGroup.controls['dateDebut'].value,
        //   prenomPere: this.inscriptionFormGroup.controls['prenomPere'].value,
        //   prenomNomMere: this.inscriptionFormGroup.controls['prenomNomMere'].value,
        //   adresse: this.inscriptionFormGroup.controls['adresse'].value,
        //   aSavoir: this.inscriptionFormGroup.controls['aSavoir'].value,
        //   lieuDeNaissance: this.inscriptionFormGroup.controls['lieuDeNaissance'].value,
        // }
      );
      this.nouvelEleve.prenom = this.inscriptionFormGroup.controls['prenom'].value;
      this.nouvelEleve.nom = this.inscriptionFormGroup.controls['nom'].value;
      this.nouvelEleve.dateNaissance = this.inscriptionFormGroup.controls['dateNaissance'].value;
      this.nouvelEleve.prenomPere = this.inscriptionFormGroup.controls['prenomPere'].value;
      this.nouvelEleve.prenomNomMere = this.inscriptionFormGroup.controls['prenomNomMere'].value;
      this.nouvelEleve.addresse = this.inscriptionFormGroup.controls['adresse'].value;
      this.nouvelEleve.aSavoir = this.inscriptionFormGroup.controls['aSavoir'].value;
      
      this.inscription = new Inscription(
        // {
        //   anneeInscription: this.inscriptionFormGroup.get('anneeInscription')?.value,
        //   somme: this.inscriptionFormGroup.controls['somme'].value,
        //   classe: this.inscriptionFormGroup.controls['classe'].value,
        //   eleve: this.nouvelEleve,
        //   dateInscription: new Date()
        // }
      );
      this.inscription.anneeInscription = this.inscriptionFormGroup.get('anneeInscription')?.value
      this.inscription.somme = this.inscriptionFormGroup.controls['somme'].value;
      this.inscription.classe = this.inscriptionFormGroup.controls['classe'].value;
      this.inscription.eleve = this.nouvelEleve;
      this.inscription.dateInscription = new Date();
      console.log(this.inscription)

      this.c_eleveService.inscrireEleve(this.inscription).subscribe(
        (data) => {
          console.log(data);
        }
      )
    }
  }

  retour(){
    this.location.back();
  }

  reset(){
    this.inscriptionFormGroup.reset()
  }

  // c_inscrireEleve(inscription : Inscription){
  //   this.c_eleveService.inscrireEleve(inscription)
  //     .subscribe(
  //       (data) => {
  //         this.inscription = new Inscription(data);
  //         console.log(inscription)
  //       }
  //     )
  // }
}
