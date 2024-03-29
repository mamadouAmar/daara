import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Eleve } from 'src/app/models/eleve';
import { EleveService } from 'src/app/service/eleve.service';
import { TestService } from 'src/app/service/testService/test.service';

// TODO: Replace this with your own data model type
// export interface ListElevesItem {
//   name: string;
//   id: number;
// }

// // TODO: replace this with real data from your application
// const EXAMPLE_DATA: ListElevesItem[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
//   {id: 11, name: 'Sodium'},
//   {id: 12, name: 'Magnesium'},
//   {id: 13, name: 'Aluminum'},
//   {id: 14, name: 'Silicon'},
//   {id: 15, name: 'Phosphorus'},
//   {id: 16, name: 'Sulfur'},
//   {id: 17, name: 'Chlorine'},
//   {id: 18, name: 'Argon'},
//   {id: 19, name: 'Potassium'},
//   {id: 20, name: 'Calcium'},
// ];

/**
 * Data source for the ListEleves view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListElevesDataSource extends DataSource<Eleve> {
  data: Eleve[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private eleveService : EleveService,
    private testService : TestService) {
    super();
    this.testService.getEleves().subscribe(
      (eleves) => {
        this.data = eleves;
      }
    );
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Eleve[]> {

    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      // return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
      //   .pipe(map(() => {
      //     return this.getPagedData(this.getSortedData([...this.data ]));
      //   }));
      return merge(
        observableOf(this.data), 
        this.paginator.page, 
        this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Eleve[]): Eleve[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Eleve[]): Eleve[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        // case 'nom': return compare(a.nom.valueOf(), b?.nom.valueOf(), isAsc);
        // case 'prenom': return compare(+a.prenom.valueOf(), +b.prenom.valueOf(), isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
