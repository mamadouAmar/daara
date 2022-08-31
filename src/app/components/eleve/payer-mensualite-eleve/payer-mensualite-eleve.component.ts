import { Component, OnInit } from '@angular/core';
import { EleveService } from 'src/app/service/eleve.service';

@Component({
  selector: 'app-payer-mensualite-eleve',
  templateUrl: './payer-mensualite-eleve.component.html',
  styleUrls: ['./payer-mensualite-eleve.component.css']
})
export class PayerMensualiteEleveComponent implements OnInit {

  constructor(private eleveService : EleveService) { }

  ngOnInit(): void {
  }

  payerMensualite(){

  }

}
