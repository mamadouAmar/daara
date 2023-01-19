import { Component, OnInit } from '@angular/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/service/employe.service';
import { Employe } from 'src/app/models/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Paiement } from 'src/app/models/paiement';

const moment =  _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM YYYY',
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    // dateA11yLabel: 'LL',
    // monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-payer-employe',
  templateUrl: './payer-employe.component.html',
  styleUrls: ['./payer-employe.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class PayerEmployeComponent implements OnInit {

  paiementEmployeForm! : FormGroup; 

  paiement! : Paiement;

  employesEnActivites : Employe[] = [];

  constructor(private employeService : EmployeService,
      private fb : FormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location) {
      this.paiementEmployeForm = this.fb.group(
        {
          employe : [null, Validators.required],
          moisAnnee : [moment(), Validators.required],
          somme : [null, ],
          others : [null]
        }
      );

      this.employeService.getAll()
        .subscribe(
          (data) => {
            console.log(data)
            this.employesEnActivites = data;
          }
        )
       }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.mois = new Date().getMonth();
  }

  mois! : number;
  year! : number;

  payerEmploye(){
    if(this.paiementEmployeForm.valid){
      this.paiement = new Paiement();
      this.paiement.annee = this.year;
      this.paiement.mois = this.mois;
      this.paiement.travailleur = this.paiementEmployeForm.controls['employe'].value;
      if(this.paiementEmployeForm.controls['somme'].value == null 
            || this.paiementEmployeForm.controls['somme'].value == 0){
        this.paiement.somme = this.paiement.travailleur.salaire
      }
      else {
        this.paiement.somme = this.paiementEmployeForm.controls['somme'].value;
      }
      this.paiement.others = this.paiementEmployeForm.controls['others'].value;
      this.paiement.datePaiement = new Date();

      console.log(this.paiement);

      this.employeService.payer_employe(this.paiement)
        .subscribe(
          (data) => {
            console.log(data);
          }
        )
    }
  }

  reset(){
    this.paiementEmployeForm.reset();
  }

  retour(){
    this.location.back()
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    
    let ctrlValue = this.paiementEmployeForm.controls['moisAnnee'].value!;
    this.mois = normalizedMonthAndYear.month();
    this.year = normalizedMonthAndYear.year();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.paiementEmployeForm.controls['moisAnnee'].setValue(ctrlValue);
    datepicker.close();
  }

}
