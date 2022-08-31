import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  addressForm = this.fb.group({
    company: null,
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
    
  }

  reset(){

  }

  constructor(private fb: FormBuilder) {

  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
