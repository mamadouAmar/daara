import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';

@Component({
  selector: 'app-view-eleve',
  templateUrl: './view-eleve.component.html',
  styleUrls: ['./view-eleve.component.css']
})
export class ViewEleveComponent implements OnInit {
  idEleve! : number;
  eleve! : Eleve;
  age! : number;

  constructor(private  eleveService : EleveService, 
    private route : ActivatedRoute,
    private location : Location,
    private router : Router) {

  }

  ngOnInit(): void {
    this.eleve = new Eleve();
    this.idEleve = this.route.snapshot.params['id'];
    this.eleveService.getOne(this.idEleve)
      .subscribe(
        (eleve) => {
          this.eleve = eleve;
          console.log(eleve);
        }
      )
  }

  modifierEleve(){

  }

  payerMensualite(){

  }

  supprimerEleve(){

  }

  reinscrireEleve(){

  }

  retour(){
    this.location.back()
  }

}
