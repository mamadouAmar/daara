import { DataSource } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Bilan } from 'src/app/models/bilan';
import { Entree } from 'src/app/models/entree';
import { Sortie } from 'src/app/models/sortie';
import { BilanService } from 'src/app/service/bilan.service';

@Component({
  selector: 'app-afficher-bilan',
  templateUrl: './afficher-bilan.component.html',
  styleUrls: ['./afficher-bilan.component.css']
})
export class AfficherBilanComponent implements OnInit {

  bilan! : Bilan;
  entreeDataSource! : DataSource<Entree>
  sortiesDataSource! : DataSource<Sortie>

  id! : number;

  entreesDisplayedColumns = ['date', 'typeEntree', 'somme'];
  sortiesDisplayedColumns = ['date', 'typeSortie', 'somme'];

  constructor(private bilanService : BilanService,
      private location : Location,
      private route : ActivatedRoute,
      private router : Router) {
        
      }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bilanService.getOne(this.id)
      .subscribe(
        (data) => {
          console.log(data);
          this.bilan = new Bilan();
          this.bilan.entrees = []
          this.bilan = data;
          this.entreeDataSource = new MatTableDataSource<Entree>(this.bilan.entrees);
          this.sortiesDataSource = new MatTableDataSource<Sortie>(this.bilan.sorties);
          this.bilan.totalEntre = 0;
          this.bilan.totalSorties = 0;
          let i:number = 0;
          for (let i of this.bilan?.entrees) {
            this.bilan.totalEntre += i.somme? i.somme : 0;
          }
          for (let i of this.bilan?.sorties) {
            this.bilan.totalSorties += i.somme? i.somme : 0;
          }
          this.bilan.gain = this.bilan.totalEntre-this.bilan.totalSorties;
        }
      )
  }

  retour(){
    this.location.back();
  }

}
