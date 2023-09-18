import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesMapComponent } from './countries-map/countries-map.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { MapComponent } from './map.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  declarations: [CountriesMapComponent, CountryDetailComponent, MapComponent],
  exports: [MapComponent],
})
export class MapsModule {}
