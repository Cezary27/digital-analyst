import { GlobalRevenue } from './global-revenue';
import { RevenueQuarter } from './revenue-quarter';
import { StockPrice } from './stock-price';

export interface NetflixChartsResponse {
  stockPrices: StockPrice[];
  revenueQuarter: RevenueQuarter[];
  globalRevenue: GlobalRevenue[];
}
