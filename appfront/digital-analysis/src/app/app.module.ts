import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapsModule } from './components/maps/maps.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NetflixModule } from './components/netflix/netflix-home/netflix.module';
import { TableModule } from './components/table-generic/table.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    LeafletModule,
    HttpClientModule,
    TableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NetflixModule,
    MapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
