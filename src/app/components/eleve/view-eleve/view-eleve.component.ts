import { Component, OnInit } from '@angular/core';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';

@Component({
  selector: 'app-view-eleve',
  templateUrl: './view-eleve.component.html',
  styleUrls: ['./view-eleve.component.css']
})
export class ViewEleveComponent implements OnInit {
  eleve! : Eleve
  age! : number
  constructor(private  eleveServer : EleveService) {

  }

  ngOnInit(): void {
    this.eleve = new Eleve();
  }

}
