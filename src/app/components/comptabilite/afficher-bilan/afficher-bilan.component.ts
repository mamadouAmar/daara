import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bilan } from 'src/app/models/bilan';
import { BilanService } from 'src/app/service/bilan.service';

@Component({
  selector: 'app-afficher-bilan',
  templateUrl: './afficher-bilan.component.html',
  styleUrls: ['./afficher-bilan.component.css']
})
export class AfficherBilanComponent implements OnInit {

  bilan! : Bilan

  constructor(private bilanService : BilanService,
      private location : Location,
      private route : ActivatedRoute,
      private router : Router) { }

  ngOnInit(): void {
  }

}
