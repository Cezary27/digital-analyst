import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetflixSubscriptionFee } from '../../models/inside/external/netflix/netflix-subscription-fee';
import { environment } from 'src/environments/environment';
import { GlobalRevenue } from '../../models/inside/external/netflix/global-revenue';
import { RevenueQuarter } from '../../models/inside/external/netflix/revenue-quarter';
import { StockPrice } from '../../models/inside/external/netflix/stock-price';
import { ResponseFromDb } from '../../models/inside/external/response';

@Injectable({
  providedIn: 'root',
})
export class NetflixService {
  constructor(private readonly _http: HttpClient) {}

  getNetflixSubscriptionFee(): Observable<NetflixSubscriptionFee[]> {
    return this._http.get<NetflixSubscriptionFee[]>(
      environment.getNetflixSubscriptionFeeURL
    );
  }

  getCountryNetflixSubscriptionFee(
    country: string
  ): Observable<NetflixSubscriptionFee> {
    return this._http.get<NetflixSubscriptionFee>(
      `${environment.getCountryNetflixSubscriptionFeeURL}${country}`
    );
  }

  getStockPricesFromYear(year: number): Observable<StockPrice[]> {
    return this._http.get<StockPrice[]>(
      `${environment.getNetflixStockPricesForYearURL}${year}`
    );
  }

  getAllNetflixRevenueQuarter(): Observable<RevenueQuarter[]> {
    return this._http.get<RevenueQuarter[]>(
      `${environment.getAllNetflixRevenueQuarterURL}`
    );
  }

  getAllNetflixRevenueQuarterFromYear(
    year: number
  ): Observable<RevenueQuarter[]> {
    return this._http.get<RevenueQuarter[]>(
      `${environment.getAllNetflixRevenueQuarterFormYearURL}/${year}`
    );
  }

  getAllNetflixGlobalRevenue(): Observable<GlobalRevenue[]> {
    return this._http.get<GlobalRevenue[]>(
      `${environment.getAllNetflixGlobalRevenueURL}`
    );
  }

  getNetflixTitles(
    page: number,
    page_size: number,
    sortBy: string,
    sortDirection: string
  ): Observable<ResponseFromDb> {
    return this._http.get<ResponseFromDb>(
      `${environment.getANetflixTitlesURL}/${page}/${page_size}/${sortBy}/${sortDirection}`
    );
  }
}
