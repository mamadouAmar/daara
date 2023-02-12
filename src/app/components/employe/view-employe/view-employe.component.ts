import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/service/employe.service';
import { PayerEmployeDialogComponent } from '../../modals/payer-employe-dialog/payer-employe-dialog.component';

@Component({
  selector: 'app-view-employe',
  templateUrl: './view-employe.component.html',
  styleUrls: ['./view-employe.component.css']
})
export class ViewEmployeComponent implements OnInit {

  maxDate = new Date();

  idEmploye! : number;
  employe! : Employe;

  employeFormGroup! : FormGroup;

  modifier : boolean = false;


  constructor(private employeService : EmployeService,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router, 
    private fb : FormBuilder,
    public dialog : MatDialog) { }

  ngOnInit(): void {
    this.employe = new Employe();
    this.idEmploye = this.route.snapshot.params['id'];
    this.employeFormGroup = this.fb.group({
      prenom: [this.employe.prenom, Validators.required],
      nom: [this.employe.nom, Validators.required],
      adresse: [this.employe.adresse, Validators.required],
      numeroTelephone: [this.employe.numeroTelephone, Validators.required],
      dateNaissance: [this.employe.dateNaissance, ],
      dateDebut: [this.employe.dateDebut ],
      profession : [this.employe.profession ],
      salaire : [this.employe.salaire, Validators.required],
    });
    this.employeFormGroup.disable();
  }

  modifierEmploye(){
    this.modifier = true;
    this.employeFormGroup.enable();
  }

  enregistrer(){
    this.employeService.postOne(
      this.employe
    ).subscribe(
      (data) => {
        console.log(data);
        this.modifier = false;
        this.employeFormGroup.disable();
      }
    )
  }

  supprimerEmploye(){
    this.employeService.delete(this.idEmploye)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/employe'])
        }
      )
  }

  retour(){
    this.location.back();
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      PayerEmployeDialogComponent, {
        data : this.idEmploye
      }
    )

    dialogRef.afterClosed()
      .subscribe(

      )
  }

}
