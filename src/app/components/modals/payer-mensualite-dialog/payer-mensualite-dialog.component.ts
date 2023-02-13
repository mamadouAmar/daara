import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { Moment} from 'moment';
import { Eleve } from 'src/app/models/eleve';
import { Mensualite } from 'src/app/models/mensualite';
import { EleveService } from 'src/app/service/eleve.service';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM YYYY',
  },
  display: {
    dateInput: 'MMM YYYY',
    //monthYearLabel: 'MMM YYYY',
    // dateA11yLabel: 'LL',
    // monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-payer-mensualite-dialog',
  templateUrl: './payer-mensualite-dialog.component.html',
  styleUrls: ['./payer-mensualite-dialog.component.css'],
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
export class PayerMensualiteDialogComponent implements OnInit {

  mois ! : number;
  year ! : number;

  mensualite! : Mensualite;

  mensualiteForm! : FormGroup;

  eleve! : Eleve

  constructor(public dialogRef : MatDialogRef<PayerMensualiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private eleveService : EleveService,
    private fb : FormBuilder,
  ) { 
    this.mensualiteForm = this.fb.group(
      {
        moisAnnee : [moment(), Validators.required],
        somme : [null],
        supplementArgent : [null],
        others : [null],
      }
    );
  }

  payerMensualite(){
    if(this.mensualiteForm.valid)
    {
      this.mensualite = new Mensualite();
      this.mensualite.annee = this.year;
      this.mensualite.mois = this.mois;
      this.mensualite.eleve = this.eleve
      if(this.mensualiteForm.controls['somme'].value == null || this.mensualiteForm.controls['somme'].value == 0){
        this.mensualite.somme = this.mensualite.eleve.classe?.mensualite;
      }
      else{
        this.mensualite.somme = this.mensualiteForm.controls['somme'].value;
      }
      this.mensualite.datePaiement = new Date();
      this.mensualite.supplementArgent = this.mensualiteForm.controls['supplementArgent'].value;
      this.mensualite.others = this.mensualiteForm.controls['others'].value;
      this.mensualite.mois = this.mensualiteForm.controls['moisAnnee'].value.month;
      this.mensualite.annee = this.mensualiteForm.controls['moisAnnee'].value.year;

      console.log(this.mensualite)

      this.eleveService.reglerMensualiteEleve(this.mensualite)
        .subscribe(
          (data) => {
            console.log(this.mensualite)
            console.log(data);
          }
        )
    }
    
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.mensualiteForm.controls['moisAnnee'].value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.mensualiteForm.controls['moisAnnee'].setValue(ctrlValue);
    datepicker.close();
  }

}
