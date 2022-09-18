import { Location } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/service/employe.service';
import { ListEmployesDataSource } from './list-employes-datasource';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements AfterViewInit {
rechercheFormGroup!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Employe>;
  dataSource: ListEmployesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['interneId', 'nom', 'prenom', 'dateDebut', 'profession', 'actions'];

  constructor(private employeService : EmployeService,
    private route : ActivatedRoute,
    private router : Router,
    private location : Location,
    private fb : FormBuilder) {
    this.dataSource = new ListEmployesDataSource(employeService);
    this.rechercheFormGroup = this.fb.group({
      recherche : this.fb.control(null)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onClickAjouterEmploye(){
    this.router.navigate(['nouvel-employe'], {relativeTo: this.route});
  }

  onClickPayerEmploye(){
    this.router.navigate(['payer-employe'], {relativeTo: this.route});
  }

  onClickPaiement(){
    this.router.navigate(['/bilan/paiment']);
  }

  onClickModifier(row : any){
    
  }

  onClickSupprimer(row : any){
    
  }

  searchEmploye() {
    throw new Error('Method not implemented.');
    }

}
