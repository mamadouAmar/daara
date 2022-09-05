import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

const moment =  _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-payer-mensualite-eleve',
  templateUrl: './payer-mensualite-eleve.component.html',
  styleUrls: ['./payer-mensualite-eleve.component.css'],
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
export class PayerMensualiteEleveComponent implements OnInit {

  disabled = true;

  mois ! : number;
  year ! : number;

  elevesInscrit! : Eleve[];
  mensualiteForm! : FormGroup;

  constructor(private eleveService : EleveService,
    private fb : FormBuilder,
    private location : Location,
    private router : Router,
    private route : ActivatedRoute) {
      this.mensualiteForm = this.fb.group(
        {
          eleve : [null, Validators.required],
          moisAnnee : [moment(), Validators.required],
          datePaiement : [moment(), Validators.required],
          somme : [null, Validators.required],
          supplementArgent : [null],
          others : [null]
        }
      );
     }

  ngOnInit(): void {
  }

  payerMensualite(){

  }

  reset(){

  }

  retour(){
    this.location.back();
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.mensualiteForm.controls['moisAnnee'].value!;
    this.mois = normalizedMonthAndYear.month();
    this.year = normalizedMonthAndYear.year();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.mensualiteForm.controls['moisAnnee'].setValue(ctrlValue);
    datepicker.close();
  }

}
