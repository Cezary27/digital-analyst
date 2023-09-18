import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NetflixService } from 'src/app/service/api/netflix.service';
import { LocalizationType } from '../sidebar/toolbar/model/localization-type';
import { TableDataTypes } from 'src/app/models/inside/table/table-data-types';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { columnsToDisplayNetflixTitles } from './netflix/columns-to-display-titles';
import { TitleNetflix } from 'src/app/models/inside/table/titles-netflix';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { TableService } from 'src/app/service/table.service';
import { Table } from 'src/app/models/inside/table';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableGenericComponent implements OnInit, OnDestroy {
  private readonly _destroy: Subject<void> = new Subject();

  digitalAnalystType: LocalizationType = 'brak';
  page: number = 1;
  pageSize: number = 10;
  lengthOfDataAll!: number;
  data!: TableDataTypes;
  columnsToDisplay: string[] = [];
  dataIsReady: boolean = false;

  constructor(
    private readonly _netflixService: NetflixService,
    private readonly _snackBar: MatSnackBar,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _tableService: TableService
  ) {}

  ngOnInit() {
    this.digitalAnalystType = this._activatedRoute.snapshot.queryParamMap.get(
      'type'
    )! as LocalizationType;

    switch (this.digitalAnalystType) {
      case 'netflix': {
        const paginatorAndSort: Table = {
          page: 1,
          pageSize: 10,
          sortBy: 'id',
          sortDirection: 'asc',
        };
        this._tableService.setSortAndPaginator(paginatorAndSort);
        this.getNetflixTitles();
        break;
      }

      case 'hboMax': {
        break;
      }

      case 'amazonPrime': {
        break;
      }

      case 'brak': {
        break;
      }
    }

    this._tableService.tableSubject
      .asObservable()
      .subscribe((paginatorAndSort) => {
        this._tableService.setSortAndPaginator(paginatorAndSort);
        this.getNetflixTitles();
      });
  }

  ngOnDestroy(): void {
    this._destroy.complete();
  }

  getNetflixTitles() {
    this._netflixService
      .getNetflixTitles(
        this._tableService.page!,
        this._tableService.pageSize!,
        this._tableService.sortBy!,
        this._tableService.sortDirection!
      )
      .pipe(
        catchError(() => {
          return of(undefined);
        }),
        takeUntil(this._destroy)
      )
      .subscribe((response) => {
        if (response) {
          this.data = response.items as TitleNetflix[];
          this.columnsToDisplay = columnsToDisplayNetflixTitles;
          this.lengthOfDataAll = response.totalCount;
          this.dataIsReady = true;
          this._changeDetectorRef.markForCheck();
        } else {
          this._snackBar.open('Error', 'Ok');
        }
      });
  }
}
