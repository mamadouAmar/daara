import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/service/depense.service';
import { AjoutDepenseComponent } from '../ajout-depense/ajout-depense.component';
import { ViewDepenseComponent } from '../view-depense/view-depense.component';
import { ListDepenseDataSource } from './list-depense-datasource';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Depense>;
  dataSource! : ListDepenseDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['depenseId', 'dateDepense', 'somme', 'depense', 'action'];

  filtrerFormGroup! : FormGroup;

  constructor(private depenseService : DepenseService,
      private route : ActivatedRoute,
      private router : Router,
      private location : Location,
      private fb : FormBuilder,
      private dialog: MatDialog) {
    this.dataSource = new ListDepenseDataSource(depenseService);
  }

  private openDialogForAdd(){
    const dialogRef = this.dialog.open(AjoutDepenseComponent);
    dialogRef.afterOpened().subscribe(
      result => {
        console.log('The dialog was closed');
      }
    )
  }

  private openDialog(row : Depense) : void {
    this.dialog.open(ViewDepenseComponent,
      {
        data : row
      }
      )
  }

  ngAfterViewInit(): void {
    this.filtrerFormGroup = this.fb.group({
      recherche : this.fb.control(null)
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClickAjouterDepense(){
    //this.router.navigate(['ajout-edit'], {relativeTo : this.route})
    this.openDialogForAdd();
  }

  onClickOnModifier(row : Depense){

  }

  onClickOnSupprimer(row : Depense){

  }

  onClickOnPlus(row : Depense){
    this.openDialog(row);
  }

  filter(){
    
  }
}
