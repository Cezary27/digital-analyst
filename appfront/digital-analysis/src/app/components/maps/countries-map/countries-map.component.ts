import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import * as Leaflet from 'leaflet';
import countriesData from '../countries-map/countriess.json';
import { Feature, GeoJsonObject, Geometry } from 'geojson';

@Component({
  selector: 'app-countries-map',
  templateUrl: './countries-map.component.html',
  styleUrls: ['./countries-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesMapComponent implements AfterViewInit, OnInit {
  selectedCountryName?: string;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map = Leaflet.map('map', {
      center: Leaflet.latLng(43, 6),
      zoom: 10,
    });

    map.createPane('labels');
    map.getPane('labels')!.style.zIndex = '650';
    map.getPane('labels')!.style.pointerEvents = 'none';

    const positron = Leaflet.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
      {
        attribution: '©OpenStreetMap, ©CartoDB',
      }
    ).addTo(map);

    const positronLabels = Leaflet.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',
      {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels',
      }
    ).addTo(map);

    const geojson = Leaflet.geoJson(countriesData as GeoJsonObject, {
      style: () => ({
        weight: 3,
        opacity: 0.5,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B',
      }),
      onEachFeature: (feature: Feature<Geometry, any>, layer: Leaflet.Layer) =>
        layer.on({
          mousedown: (e: Leaflet.LeafletMouseEvent) => this.highlightFeature(e),
          mouseout: (e: Leaflet.LeafletMouseEvent) => this.resetFeature(e),
        }),
    }).addTo(map);
  }

  private highlightFeature(event: Leaflet.LeafletMouseEvent): void {
    const layer = event.target;
    this.selectedCountryName = layer.feature.properties.ADMIN;
    layer.setStyle({
      weight: 10,
      opacity: 1.0,
      color: '#DFA612',
      fillOpacity: 1.0,
      fillColor: '#FAE042',
    });
    this._changeDetectorRef.markForCheck();
  }

  private resetFeature(event: Leaflet.LeafletMouseEvent): void {
    const layer = event.target;

    layer.setStyle({
      weight: 3,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B',
    });
  }
}
