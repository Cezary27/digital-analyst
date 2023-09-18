import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Table } from '../models/inside/table';
import { dataFromDbType } from '../models/inside/external/response';
import { NetflixService } from './api/netflix.service';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  tableSubject: Subject<Table> = new Subject();
  tableDataSubject: Subject<dataFromDbType[]> = new Subject();

  paginatorAndSort!: Table;

  //Paginator
  pageSize: number = 10;
  page: number = 1;
  lengthOfDataTable?: number;
  //Sort
  sortBy?: string;
  sortDirection?: string;

  //Filter

  constructor() {}

  setPaginatorValues(
    newPageSize: number,
    newPage: number,
    newLengthOfDataTable?: number
  ): void {
    this.pageSize = newPageSize;
    this.page = newPage;
    this.lengthOfDataTable = newLengthOfDataTable;

    this.paginatorAndSort.pageSize = newPageSize;
    this.paginatorAndSort.page = newPage;
  }

  setSortValues(newSortBy: string, newSortDirection: string): void {
    this.sortBy = newSortBy;
    this.sortDirection = newSortDirection != '' ? newSortDirection : 'none';

    this.paginatorAndSort.sortBy = newSortBy;
    this.paginatorAndSort.sortDirection = this.sortDirection;
  }

  setSortAndPaginator(paginatorAndSort: Table): void {
    this.pageSize = paginatorAndSort.pageSize;
    this.page = paginatorAndSort.page;
    this.lengthOfDataTable = paginatorAndSort.lengthOfDataTable;
    this.sortBy = paginatorAndSort.sortBy;
    this.sortDirection = paginatorAndSort.sortDirection;

    this.paginatorAndSort = paginatorAndSort;
  }

  setLengthOfDataTable(newLengthOfDataTable: number): void {
    this.lengthOfDataTable = newLengthOfDataTable;
  }

  sortApply(): void {}

  paginatorApply(): void {}

  // filterApply(): void {}
}
