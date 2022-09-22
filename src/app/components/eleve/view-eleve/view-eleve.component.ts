import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';

@Component({
  selector: 'app-view-eleve',
  templateUrl: './view-eleve.component.html',
  styleUrls: ['./view-eleve.component.css']
})
export class ViewEleveComponent implements OnInit {

  modifier : boolean = false;

  idEleve! : number;
  eleve! : Eleve;
  age! : number;

  eleveFormgroup! : FormGroup;

  constructor(private  eleveService : EleveService, 
    private route : ActivatedRoute,
    private location : Location,
    private router : Router,
    private fb : FormBuilder) {
    this.eleve = new Eleve();
    this.idEleve = this.route.snapshot.params['id'];
    this.eleveService.getOne(this.idEleve)
      .subscribe(
        (eleve) => {
          this.eleve = eleve;
          console.log(eleve);
        }
      );

      this.eleveFormgroup = this.fb.group(
        {
          prenom : this.fb.control(this.eleve.prenom, [Validators.required]),
          nom : this.fb.control(this.eleve.nom, [Validators.required]),
          dateNaissance : this.fb.control(this.eleve.dateNaissance, [Validators.required]),
          adresse : this.fb.control(this.eleve.addresse, [Validators.required]),
          prenomPere : this.fb.control(this.eleve.prenomPere, [Validators.required]),
          prenomNomMere : this.fb.control(this.eleve.prenomNomMere, [Validators.required]),
          aSavoir : this.fb.control(this.eleve.aSavoir, [Validators.required]),
          dateDebut : this.fb.control(this.eleve.dateDebut),
          classe : this.fb.control(this.eleve.classe?.appellation),
        }
      );
  }

  ngOnInit(): void {
    if(!this.modifier){
      this.eleveFormgroup.disable();
    }
  }

  modifierEleve(){
    this.modifier = true;
    this.eleveFormgroup.enable();
  }

  payerMensualite(){

  }

  supprimerEleve(){
    this.eleveService.delete(this.idEleve)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/eleve']);
        }
      )
  }

  reinscrireEleve(){

  }

  retour(){
    this.location.back()
  }

  enregistrer() {
    this.eleveService.postOne(this.eleve)
      .subscribe(
        (data) => {
          console.log(data);
          this.modifier = false;
          this.eleveFormgroup.disable();
          this.router.navigate([`/eleve/${this.eleve.eleveId}`]);
        }
      )
  }

}
