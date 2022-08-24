import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Depense } from 'src/app/models/depense';
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
  dataSource: ListDepenseDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['depenseId', 'dateDepense', 'somme', 'depense', 'action'];

  constructor() {
    this.dataSource = new ListDepenseDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClickAjouterDepense(){

  }

  onClickOnModifier(){

  }

  onClickOnSupprimer(){

  }

  onClickOnPlus(){
    
  }
}
