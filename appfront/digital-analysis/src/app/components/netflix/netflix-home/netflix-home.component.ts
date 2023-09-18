import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ContentListService } from 'src/app/service/content-list.service';
import { CONTENT_LIST_NETFLIX } from './content-list/content-list-netflix';
import { Subject, catchError, forkJoin, of, takeUntil } from 'rxjs';
import { NetflixService } from 'src/app/service/api/netflix.service';
import { NetflixChartsResponse } from 'src/app/models/inside/external/netflix/netflix-charts-response';
import { GlobalRevenue } from 'src/app/models/inside/external/netflix/global-revenue';
import { RevenueQuarter } from 'src/app/models/inside/external/netflix/revenue-quarter';
import { StockPrice } from 'src/app/models/inside/external/netflix/stock-price';
import { EChartsOption, LegendComponentOption, SeriesOption } from 'echarts';
import { formatDate } from '@angular/common';
import { YearQuarter } from 'src/app/models/inside/external/netflix/year-quarter';

@Component({
  selector: 'app-netflix-home',
  templateUrl: './netflix-home.component.html',
  styleUrls: ['./netflix-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetflixHomeComponent implements OnInit, OnDestroy {
  private readonly _destroy: Subject<void> = new Subject();

  isReady: boolean = false;

  stockPrices: StockPrice[] = [];
  revenueQuarters: RevenueQuarter[] = [];

  //GLOBAL REVENUE
  globalRevenues: GlobalRevenue[] = [];
  globalRevenuesDates: Date[] = [];
  globalRevenueLegend: LegendComponentOption = {
    data: ['Daty', 'Globalny przychód'],
    align: 'left',
  };
  globalRevenueXAxis: any;
  globalRevenueYAxis: any = {};
  globalRevenueTooltip: any = {};
  globalRevenueSeries!: SeriesOption;

  //QUARTER REVENUE
  quartersRevenueOptions: any[] = [];
  quarterRevenues: RevenueQuarter[] = [];
  quarterRevenueXAxis: any;
  quarterRevenueYAxis: any = {};
  quarterRevenueTooltip: any = {};
  quarterRevenueSeries!: SeriesOption;

  constructor(
    private readonly _contentListService: ContentListService,
    private readonly _netflixService: NetflixService,
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
    this._contentListService.pageContentList.next(CONTENT_LIST_NETFLIX);
  }

  ngOnDestroy(): void {
    this._destroy.complete();
  }
  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    forkJoin({
      stockPrices: this._netflixService.getStockPricesFromYear(2022),
      revenueQuarter: this._netflixService.getAllNetflixRevenueQuarter(),
      globalRevenue: this._netflixService.getAllNetflixGlobalRevenue(),
    })
      .pipe(
        catchError(() => {
          return of(undefined);
        }),
        takeUntil(this._destroy)
      )
      .subscribe((response) => {
        if (response) {
          this.stockPrices = response.stockPrices;
          this.revenueQuarters = response.revenueQuarter;
          console.log(this.revenueQuarters);
          //GLOBAL REVENUE
          this.globalRevenues = response.globalRevenue;
          this.globalRevenuesDates = this.globalRevenues.map(
            (globalRevenue) => globalRevenue.date
          );
          this.globalRevenueXAxis = {
            data: this.globalRevenuesDates,
            silent: false,
            splitLine: {
              show: false,
            },
          };
          this.globalRevenueSeries = {
            name: 'Globalny przychód',
            type: 'bar',
            data: this.globalRevenues.map(
              (globalRevenue) => globalRevenue.globalRevenue
            ),
            animationDelay: (idx) => idx * 10 + 100,
          };

          //Quarter Revenues charts
          this.revenueQuarters.forEach((revenueQuarter) => {
            this.quartersRevenueOptions.push({
              title: revenueQuarter.area,
              legend: {},
              tooltip: {},

              dataset: {
                source: this.setRevenueQuartersDataSource(revenueQuarter),
              },

              xAxis: { type: 'category' },
              yAxis: {},
              series: [
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' },
              ],
            });
          });

          /////////////////////////////////////////////////////////////////

          this.isReady = true;
          this._changeDetectorRef.markForCheck();
        }
      });
  }

  setRevenueQuartersDataSource(revenueQuarter: RevenueQuarter) {
    const { area, id, ...yearQuarter } = revenueQuarter;

    const years: string[] = this.getYears(yearQuarter);
    let quartersWithYear: any[] = [];
    const allQuartersWithYear: string[][] = [];

    allQuartersWithYear.push(['q1', 'q2', 'q3', 'q4']);
    allQuartersWithYear.at(0)?.unshift('year');

    for (let i = 0; i < years.length; i++) {}

    years.forEach((year) => {
      quartersWithYear.push(year);
      this.getQuartersForYear(yearQuarter, year).forEach((quartes) => {
        quartersWithYear.push(quartes);
      });

      allQuartersWithYear.push(quartersWithYear);
      quartersWithYear = [];
    });

    const test = allQuartersWithYear.forEach((quarter) => {
      const mappedQuarter = quarter.map((q) => q);
      return mappedQuarter;
    });

    return allQuartersWithYear;
  }

  getYears(yearQuarter: YearQuarter): string[] {
    const years: string[] = [];
    for (const key in yearQuarter) {
      if (yearQuarter.hasOwnProperty(key)) {
        years.push(key.slice(3));
      }
    }
    return [...new Set(years)];
  }

  getQuartersForYear(yearQuarter: YearQuarter, year: string): number[] {
    const quartersValues: number[] = [];
    for (const key in yearQuarter) {
      if (yearQuarter.hasOwnProperty(key) && key.includes(year)) {
        quartersValues.push(yearQuarter[key]);
      }
    }
    return quartersValues;
  }
}
