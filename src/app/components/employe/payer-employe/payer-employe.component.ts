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

  employesEnActivites! : Employe[];

  constructor(private employeService : EmployeService,
      private fb : FormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location) {
        this.paiementEmployeForm = this.fb.group(
          {
            employe : [null, Validators.required],
            moisAnnee : [null, Validators.required],
            datePaiement : [moment(), Validators.required],
            somme : [null, Validators.required],
            others : [null]
          }
        );
       }

  ngOnInit(): void {
  }

  disabled = true;

  mois ! : number;
  year ! : number;

  payerEmploye(){

  }

  reset(){
    this.paiementEmployeForm.reset();
  }

  retour(){
    this.location.back()
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.paiementEmployeForm.controls['moisAnnee'].value!;
    this.mois = normalizedMonthAndYear.month();
    this.year = normalizedMonthAndYear.year();
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.paiementEmployeForm.controls['moisAnnee'].setValue(ctrlValue);
    datepicker.close();
  }

}
