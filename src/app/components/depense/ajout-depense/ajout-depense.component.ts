import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.css']
})
export class AjoutDepenseComponent {
  
  ajoutDepenseForm = this.fb.group({
    depense: [null, Validators.required],
    somme: [null, Validators.required],
    dateDepese: [null, Validators.required],
  });

  

  constructor(private fb: UntypedFormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location) {}

  ajouterDepense(){
    
  }

  retour(){
    this.location.back();
  }

  reset(){

  }
}
