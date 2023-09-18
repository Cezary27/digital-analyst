import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, catchError, of, takeUntil } from 'rxjs';
import { StockPrice } from 'src/app/models/inside/external/netflix/stock-price';
import { NetflixService } from 'src/app/service/api/netflix.service';
import { ContentListService } from 'src/app/service/content-list.service';

@Component({
  selector: 'app-stock-data-netflix',
  templateUrl: './stock-data-netflix.component.html',
  styleUrls: ['./stock-data-netflix.component.scss'],
})
export class StockDataNetflixComponent implements OnInit {
  private readonly _destroy: Subject<void> = new Subject();

  isReady: boolean = false;
  isChartLoading = true;
  stockPrices: StockPrice[] = [];

  years: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  matcher = new MyErrorStateMatcher();
  selected = new FormControl('valid', [Validators.required]);
  options?: any;
  stockDataDates: Date[] = [];

  constructor(
    private readonly _contentListService: ContentListService,
    private readonly _netflixService: NetflixService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onYearSelected(event: any) {
    this.isReady = false;
    this.getStockDataNetflix(event.value);
  }

  private getStockDataNetflix(year: number): void {
    this._netflixService
      .getStockPricesFromYear(year)
      .pipe(
        catchError(() => {
          return of(undefined);
        }),
        takeUntil(this._destroy)
      )
      .subscribe((response) => {
        if (response) {
          this.stockPrices = response;
          console.log(this.stockPrices);

          this.stockDataDates = this.stockPrices.map(
            (stockPrices) => stockPrices.date
          );
          this.options = {
            legend: {
              data: ['adjClose', 'close', 'high', 'low', 'open', 'volume'],
              align: 'left',
            },
            tooltip: {},
            xAxis: {
              data: this.stockDataDates,
              silent: false,
              splitLine: {
                show: false,
              },
            },
            yAxis: {},
            series: [
              {
                name: 'adjClose',
                type: 'bar',
                data: this.stockPrices.map(
                  (stockPrices) => stockPrices.adjClose
                ),
                animationDelay: (idx: any) => idx * 10,
              },
              {
                name: 'close',
                type: 'bar',
                data: this.stockPrices.map((stockPrices) => stockPrices.close),
                animationDelay: (idx: any) => idx * 10 + 100,
              },
              {
                name: 'high',
                type: 'bar',
                data: this.stockPrices.map((stockPrices) => stockPrices.high),
                animationDelay: (idx: any) => idx * 10 + 100,
              },
              {
                name: 'low',
                type: 'bar',
                data: this.stockPrices.map((stockPrices) => stockPrices.low),
                animationDelay: (idx: any) => idx * 10 + 100,
              },
              {
                name: 'open',
                type: 'bar',
                data: this.stockPrices.map((stockPrices) => stockPrices.open),
                animationDelay: (idx: any) => idx * 10 + 100,
              },
              {
                name: 'volume',
                type: 'bar',
                data: this.stockPrices.map(
                  (stockPrices) => stockPrices.adjClose
                ),
                animationDelay: (idx: any) => idx * 10 + 100,
              },
            ],
          };
          this.isReady = true;
          this._changeDetectorRef.markForCheck();
        } else {
          this._snackBar.open(`Failed to download data`, 'Close');
        }
      });
  }
}

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
