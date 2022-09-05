import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/service/depense.service';

@Component({
  selector: 'app-view-depense',
  templateUrl: './view-depense.component.html',
  styleUrls: ['./view-depense.component.css']
})
export class ViewDepenseComponent implements OnInit {

  depense! : Depense;

  constructor(
    private depenseService : DepenseService,
    private location : Location,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  retour(){
    this.location.back()
  }

  modifier(){
    
  }

  supprimer(){

  }

}
