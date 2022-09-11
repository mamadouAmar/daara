import { DataSource } from '@angular/cdk/collections';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bilan } from 'src/app/models/bilan';
import { BilanService } from 'src/app/service/bilan.service';

@Component({
  selector: 'app-list-calcul-bilan',
  templateUrl: './list-calcul-bilan.component.html',
  styleUrls: ['./list-calcul-bilan.component.css']
})
export class ListCalculBilanComponent implements OnInit {
onClickSupprimer(_t70: any) {
throw new Error('Method not implemented.');
}
onClickModifier(_t70: any) {
throw new Error('Method not implemented.');
}
onClickPlus(_t70: any) {
throw new Error('Method not implemented.');
}

  dataSource! : DataSource<Bilan>;

  bilan! : Bilan

  displayedColumns = ['dateBilan','dateDebut', 'dateFin' ,'totalEntrees', 'totalSorties', 'actions']

  constructor(private bilanService : BilanService,
    private route : ActivatedRoute,
    private location : Location,
    private router : Router) { }

  ngOnInit(): void {

  }

}
