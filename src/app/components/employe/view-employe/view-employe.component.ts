import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-view-employe',
  templateUrl: './view-employe.component.html',
  styleUrls: ['./view-employe.component.css']
})
export class ViewEmployeComponent implements OnInit {

  employe! : Employe;


  constructor(private employeService : EmployeService,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router) { }

  ngOnInit(): void {
    this.employe = new Employe();
  }

  modifierEmploye(){

  }

  payerSalaire(){

  }

  supprimerEmploye(){

  }

  retour(){
    this.location.back();
  }

}
