import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payer-mensualite-dialog',
  templateUrl: './payer-mensualite-dialog.component.html',
  styleUrls: ['./payer-mensualite-dialog.component.css']
})
export class PayerMensualiteDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<PayerMensualiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
