import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import {_rollupMoment, Moment} from 'moment';
import { Moment} from 'moment';
import { Eleve } from 'src/app/models/eleve';
import { Inscription } from 'src/app/models/inscription';
import { EleveService } from 'src/app/service/eleve.service';
import { NiveauService } from 'src/app/service/niveau.service';

@Component({
  selector: 'app-reinscription-dialog',
  templateUrl: './reinscription-dialog.component.html',
  styleUrls: ['./reinscription-dialog.component.css'],
  providers : [

  ]
})
export class ReinscriptionDialogComponent implements OnInit {

  eleve! : Eleve;
  inscription! : Inscription;

  classes : any[] = [];

  inscriptionFormGroup! : FormGroup;

  year : number = new Date().getFullYear();

  constructor(
    public dialogRef : MatDialogRef<ReinscriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : number,
    private eleveService : EleveService,
    private niveauService : NiveauService,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.inscriptionFormGroup = this.fb.group(
      {
        classe : this.fb.control(''),
        anneeInscription : this.fb.control(this.year, [Validators.required]), 
        somme : this.fb.control(''),
      }
    );
  }

  inscrireEleve(){
    if(this.inscriptionFormGroup.valid){
      this.inscription = new Inscription();
      this.inscription.anneeInscription = this.inscriptionFormGroup.get('anneeInscription')?.value
      this.inscription.somme = this.inscriptionFormGroup.controls['somme'].value;
      this.inscription.classe = this.inscriptionFormGroup.controls['classe'].value;
      this.inscription.eleve = this.eleve;
      this.inscription.dateInscription = new Date();
      console.log(this.inscription)

      this.eleveService.inscrireEleve(this.inscription).subscribe(
        (data) => {
          console.log(data);
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
