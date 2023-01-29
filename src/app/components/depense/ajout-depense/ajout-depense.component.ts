import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/service/depense.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.css']
})
export class AjoutDepenseComponent implements OnInit{

  depense! : Depense;
  dateActuel = new Date().toDateString();
  
  ajoutDepenseForm! : FormGroup;

  

  constructor(
    public dialogRef : MatDialogRef<AjoutDepenseComponent>,
    private fb: FormBuilder,
    private depenseService : DepenseService) {}
  
  
  ngOnInit(): void {
    this.ajoutDepenseForm = this.fb.group({
      descDepense: this.fb.control(null, [Validators.required]),
      somme: this.fb.control(null, [Validators.required]),
      dateDepense: this.fb.control(this.dateActuel, [Validators.required]),
    });
  }

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
      this.dialogRef.close();
    }
    
  }

  retour(){
    this.dialogRef.close();
  }

  reset(){
    this.ajoutDepenseForm.reset();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
