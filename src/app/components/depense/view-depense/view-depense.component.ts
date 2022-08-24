import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/models/depense';

@Component({
  selector: 'app-view-depense',
  templateUrl: './view-depense.component.html',
  styleUrls: ['./view-depense.component.css']
})
export class ViewDepenseComponent implements OnInit {

  depense! : Depense;

  constructor() { }

  ngOnInit(): void {
  }

}
