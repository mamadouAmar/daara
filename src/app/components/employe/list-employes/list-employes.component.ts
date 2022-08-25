import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/service/employe.service';
import { ListEmployesDataSource } from './list-employes-datasource';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Employe>;
  dataSource: ListEmployesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['interneId', 'nom', 'prenom', 'dateDebut', 'profession', 'actions'];

  constructor(private employeService : EmployeService) {
    this.dataSource = new ListEmployesDataSource(employeService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClickAjouterEmploye(){

  }

  onClickVoirEmploye(){

  }

  onClickPayerEmploye(){

  }

  onClickPaiement(){
    
  }

}
