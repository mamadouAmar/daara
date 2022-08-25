import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Eleve } from 'src/app/models/eleve';
import { Inscription } from 'src/app/models/inscription';
import { EleveService } from 'src/app/service/eleve.service';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// import {_rollupMoment, Moment} from 'moment';
import { Moment} from 'moment';


// const moment = _rollupMoment || _moment;

const moment = _moment;

export const YEAR_FORMAT = {
  parse : {
    dateInput : 'YYYY'
  },
  display : {
    dateInput: 'YYYY',
    // monthYearLabel: 'YYYY',
    // monthYearA11yLabel: 'YYYY',
  }
}

@Component({
  selector: 'app-inscrire-eleve',
  templateUrl: './inscrire-eleve.component.html',
  styleUrls: ['./inscrire-eleve.component.css'],
  providers : [
    {
      provide : DateAdapter,
      useClass : MomentDateAdapter,
      deps : [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }, 
    {
      provide : MAT_DATE_FORMATS, useValue : YEAR_FORMAT
    }
  ]
})
export class InscrireEleveComponent implements OnInit {

  nouvelEleve! : Eleve;
  inscription! : Inscription;

  inscriptionFormGroup! : FormGroup;



  constructor(
    private eleveService : EleveService,
    private fb : FormBuilder
    ) { }

  ngOnInit(): void {
    this.inscriptionFormGroup = this.fb.group(
      {
        prenom : this.fb.control('', [Validators.required]),
        nom : this.fb.control('', [Validators.required]),
        dateNaissance : this.fb.control('', [Validators.required]),
        adresse : this.fb.control('', [Validators.required]),
        prenomPere : this.fb.control('', [Validators.required]),
        prenomNomMere : this.fb.control('', [Validators.required]),
        aSavoir : this.fb.control('', [Validators.required]),
        dateDebut : this.fb.control(''),
        classe : this.fb.control(''),
        anneeInscription : this.fb.control(new FormControl(moment()), [Validators.required]), 
        somme : this.fb.control(''),
      }
    );
  }

  setYear(normalizedYear :Moment, datepicker: MatDatepicker<Moment>){
    let ctrlValue = this.inscriptionFormGroup.controls['anneeInscription'].value!;
    ctrlValue = normalizedYear.year()
    this.inscriptionFormGroup.controls['anneeInscription'].setValue(ctrlValue);
    datepicker.close()
  }

  inscrireEleve(){

  }

  retour(){

  }

  reset(){

  }
}
