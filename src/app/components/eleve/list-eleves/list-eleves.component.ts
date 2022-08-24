import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';
import { ListElevesDataSource } from './list-eleves-datasource';

@Component({
  selector: 'app-list-eleves',
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css']
})
export class ListElevesComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Eleve>;
  dataSource: ListElevesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['eleveId', 'nom', 'prenom', 'dateNaissance', 'classe', 'action'];

  constructor(private eleveService : EleveService) {
    this.dataSource = new ListElevesDataSource(eleveService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  afficherInfosEleve(){

  }

  clickOnMensualite(){

  }

  rechercherEleve(){

  }

  clickOnInscrire(){

  }
}
