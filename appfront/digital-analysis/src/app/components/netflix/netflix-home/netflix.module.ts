import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetflixHomeComponent } from './netflix-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartModule } from '../../chart/chart.module';
import { StockDataNetflixComponent } from '../stock-data-netflix/stock-data-netflix.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    ChartModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [NetflixHomeComponent, StockDataNetflixComponent],
  exports: [NetflixHomeComponent, StockDataNetflixComponent],
})
export class NetflixModule {}
