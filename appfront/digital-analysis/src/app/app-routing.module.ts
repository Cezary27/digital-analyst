import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { MapComponent } from './components/maps/map.component';
import { HomeComponent } from './components/home/home.component';
import { NetflixHomeComponent } from './components/netflix/netflix-home/netflix-home.component';
import { HboMaxHomeComponent } from './components/hbo-max/hbo-max-home/hbo-max-home.component';
import { AmazonPrimeHomeComponent } from './components/amazon-prime/amazon-prime-home/amazon-prime-home.component';
import { TableComponent } from './components/table/table.component';
import { TableGenericComponent } from './components/table-generic/table-generic.component';
import { StockDataNetflixComponent } from './components/netflix/stock-data-netflix/stock-data-netflix.component';

const routes: Routes = [
  { path: 'netflix', component: NetflixHomeComponent },
  { path: 'netflix-stock-data', component: StockDataNetflixComponent },
  { path: 'hbo-max', component: HboMaxHomeComponent },
  { path: 'amazon-prime', component: AmazonPrimeHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'table', component: TableGenericComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: NetflixHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
