import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as _moment from 'moment';

import { Moment} from 'moment';
import { Employe } from 'src/app/models/employe';
import { Paiement } from 'src/app/models/paiement';
import { EmployeService } from 'src/app/service/employe.service';


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
  selector: 'app-payer-employe-dialog',
  templateUrl: './payer-employe-dialog.component.html',
  styleUrls: ['./payer-employe-dialog.component.css'],
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
export class PayerEmployeDialogComponent implements OnInit {

  paiementEmployeForm! : FormGroup; 

  paiement! : Paiement;

  employe! : Employe;

  mois! : number;
  year! : number;


  constructor(
    public dialogRef : MatDialogRef<PayerEmployeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private fb : FormBuilder,
    private employeService : EmployeService
  ) {
    this.paiementEmployeForm = this.fb.group(
      {
        moisAnnee : [moment(), Validators.required],
        somme : [null, ],
        others : [null]
      }
    );
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.mois = new Date().getMonth();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  payerEmploye(){
    if(this.paiementEmployeForm.valid){
      this.paiement = new Paiement();
      this.paiement.annee = this.year;
      this.paiement.mois = this.mois;
      this.paiement.employe = this.employe;
      if(this.paiementEmployeForm.controls['somme'].value == null 
            || this.paiementEmployeForm.controls['somme'].value == 0){
        this.paiement.somme = this.paiement.employe.salaire
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
