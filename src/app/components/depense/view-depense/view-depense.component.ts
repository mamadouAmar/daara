import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/service/depense.service';

@Component({
  selector: 'app-view-depense',
  templateUrl: './view-depense.component.html',
  styleUrls: ['./view-depense.component.css']
})
export class ViewDepenseComponent implements OnInit {

  idDepense! : number;
  depense! : Depense;

  constructor(
    private depenseService : DepenseService,
    private location : Location,
    private router : Router,
    private route : ActivatedRoute,
    public dialogRef : MatDialogRef<ViewDepenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Depense
  ) { 
    this.depense = data;
  }

  ngOnInit(): void {
    this.idDepense = this.route.snapshot.params['id'];
  }

  retour(){
    // this.location.back()
    this.dialogRef.close()
  }

  modifier(){
    
  }

  supprimer(){

  }

}
