import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  }

  reset(){

  }

}
