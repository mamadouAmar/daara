import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from 'src/app/models/niveau';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})

export class AjoutEmployeComponent {

  maxDate = new Date();

  professions! : String[];

  classes! : Niveau[];

  ajouterEmployeForm = this.fb.group({
    prenom: [null, Validators.required],
    nom: [null, Validators.required],
    adresse: [null, Validators.required],
    numeroTelephone: [null, Validators.required],
    dateNaissance: [null, ],
    dateDebut: [null, ],
    profession : [null, ],
    salaire : [null, Validators.required],
    classeGeree: [null, ],
  });


  retour(){
    this.location.back();
  }

  reset(){
    this.ajouterEmployeForm.reset();
  }

  constructor(private fb: FormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location) {

  }

  onSubmit(): void {
    console.log("Done")
  }
}
