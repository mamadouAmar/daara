import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payer-employe-dialog',
  templateUrl: './payer-employe-dialog.component.html',
  styleUrls: ['./payer-employe-dialog.component.css']
})
export class PayerEmployeDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<PayerEmployeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
