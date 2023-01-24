import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/service/depense.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.css']
})
export class AjoutDepenseComponent {

  depense! : Depense;
  dateActuel = new Date().toDateString()
  
  ajoutDepenseForm = this.fb.group({
    descDepense: [null, Validators.required],
    somme: [null, Validators.required],
    dateDepense: [this.dateActuel],
  });

  

  constructor(
    public dialogRef : MatDialogRef<AjoutDepenseComponent>,
    private fb: UntypedFormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location,
      private depenseService : DepenseService) {}

  ajouterDepense(){
    if(this.ajoutDepenseForm.valid){
      this.depense = new Depense();
      this.depense.depense = this.ajoutDepenseForm.controls['descDepense'].value;
      this.depense.somme = this.ajoutDepenseForm.controls['somme'].value;
      this.depense.dateDepense = new Date();

      this.depenseService.postOne(this.depense)
        .subscribe(
          (data) => {
            console.log(data)
          }
        )
    }
    
  }

  retour(){
    this.location.back();
  }

  reset(){
    this.ajoutDepenseForm.reset();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
