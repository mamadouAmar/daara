import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bilan } from 'src/app/models/bilan';
import { BilanService } from 'src/app/service/bilan.service';

@Component({
  selector: 'app-formulaire-calcul-bilan',
  templateUrl: './formulaire-calcul-bilan.component.html',
  styleUrls: ['./formulaire-calcul-bilan.component.css']
})
export class FormulaireCalculBilanComponent implements OnInit {

  calculBilanFormGroup! : FormGroup;

  constructor(private bilanService : BilanService,
    private route : ActivatedRoute,
    private router : Router,
    private location : Location,
    private formBuilder: FormBuilder) { 
      this.calculBilanFormGroup = this.formBuilder.group(
        {
          dateDebut : [null, Validators.required],
          dateFin : [null, Validators.required]
        }
      )
  }

  ngOnInit(): void {
  }

  calculerBilan(){
    if (this.calculBilanFormGroup.valid){
      let bilan = new Bilan();
      bilan.debut = this.calculBilanFormGroup.controls['dateDebut'].value;
      bilan.fin = this.calculBilanFormGroup.controls['dateFin'].value;
      bilan.dateBilan = new Date();
      this.bilanService.calculerBilan(bilan)
        .subscribe(
          (data) => {
           console.log(data);
          }
        )
    }
    
  }

  reset(){
    this.calculBilanFormGroup.reset();
  }

}
