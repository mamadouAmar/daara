import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';
import { TestService } from 'src/app/service/testService/test.service';
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
  dataSource! : ListElevesDataSource;

  rechercheFormGroup! : FormGroup;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['eleveId', 'nom', 'prenom', 'dateNaissance', 'classe', 'action'];

  constructor(private eleveService : EleveService,
    private testService : TestService,
      private location : Location,
      private route : ActivatedRoute,
      private router : Router,
      private fb : FormBuilder) {
    this.dataSource = new ListElevesDataSource(eleveService, testService);
    this.rechercheFormGroup = this.fb.group({
      recherche : this.fb.control(null)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  afficherInfosEleve(){

  }

  clickOnMensualite(){
    this.router.navigate(['mensualite'], {relativeTo: this.route});
  }

  rechercherEleve(){

  }

  clickOnInscrire(){
    this.router.navigate(['inscrire'], {relativeTo: this.route});
  }

  searchEleve(){

  }

  onClickPlus(row : any){

  }

  onClickModifier(row : any){
    
  }

  onClickSupprimer(row : any){
    
  }
}
