import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reinscription-dialog',
  templateUrl: './reinscription-dialog.component.html',
  styleUrls: ['./reinscription-dialog.component.css']
})
export class ReinscriptionDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<ReinscriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : number
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
