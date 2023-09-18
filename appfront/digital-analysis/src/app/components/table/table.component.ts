import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { dataFromDbType } from 'src/app/models/inside/external/response';
import { Table } from 'src/app/models/inside/table';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() columnsToDisplay!: string[];
  @Input() data!: dataFromDbType[];
  @Input() lengthOfDataTable!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnsToDisplayWithExpand: string[] = [];
  expandedElement?: dataFromDbType;
  dataSource!: MatTableDataSource<dataFromDbType>;
  pageIndex: number = 1;
  pageSize: number = 10;

  paginatorAndSort: Table;

  constructor(
    private readonly _tableService: TableService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this.paginatorAndSort = this._tableService.paginatorAndSort!;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    this._changeDetectorRef.markForCheck();
  }

  ngOnInit() {}

  sortData(sort: Sort): void {
    this._tableService.setSortValues(sort.active, sort.direction);
    this._tableService.tableSubject.next(this._tableService.paginatorAndSort!);
  }

  onPageChange(event: PageEvent) {
    this._tableService.setPaginatorValues(
      event.pageSize,
      event.pageIndex + 1,
      event.length
    );
    this._tableService.tableSubject.next(this._tableService.paginatorAndSort!);
  }
}
