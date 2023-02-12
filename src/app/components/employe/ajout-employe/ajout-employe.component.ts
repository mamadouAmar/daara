import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { Niveau } from 'src/app/models/niveau';
import { EmployeService } from 'src/app/service/employe.service';
import { NiveauService } from 'src/app/service/niveau.service';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})

export class AjoutEmployeComponent implements OnInit{

  maxDate = new Date();

  professions! : String[];

  classes : Niveau[] = [];

  employe! : Employe;

  ajouterEmployeForm! : FormGroup;



  retour(){
    this.location.back();
  }

  reset(){
    this.ajouterEmployeForm.reset();
  }

  constructor(private fb: FormBuilder,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location,
      private employeService : EmployeService,
      private niveauService : NiveauService) {

      this.ajouterEmployeForm = this.fb.group({
        prenom: [null, Validators.required],
        nom: [null, Validators.required],
        adresse: [null, Validators.required],
        numeroTelephone: [null, Validators.required],
        dateNaissance: [null, ],
        profession : [null, ],
        salaire : [null, Validators.required],
        classeGeree: [null, ],
      });
      
      niveauService.getAll()
        .subscribe(
          (data) => {
            console.log(data);
            this.classes = data;
          }
        )
  }
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if(this.ajouterEmployeForm.valid){
      this.employe = new Employe();
      this.employe.nom = this.ajouterEmployeForm.controls['nom'].value;
      this.employe.prenom = this.ajouterEmployeForm.controls['prenom'].value;
      this.employe.adresse = this.ajouterEmployeForm.controls['adresse'].value;
      this.employe.numeroTelephone = this.ajouterEmployeForm.controls['numeroTelephone'].value;
      this.employe.dateNaissance = this.ajouterEmployeForm.controls['dateNaissance'].value;
      this.employe.profession = this.ajouterEmployeForm.controls['profession'].value;
      this.employe.salaire = this.ajouterEmployeForm.controls['salaire'].value;
      // this.employe.classeGeree = this.ajouterEmployeForm.controls['classeGeree'].value;
      this.employe.dateDebut = new Date();

      this.employeService.postOne(this.employe)
        .subscribe(
          (data) => {
            console.log(data);
          }
        )
    }
  }
}
