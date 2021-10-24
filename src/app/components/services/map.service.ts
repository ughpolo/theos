import { Injectable } from '@angular/core';

import * as L from 'leaflet';

import "node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
import { MarkerService } from './marker.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;

  iconRetinaUrl = 'assets/marker-icon-2x.png';
  iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png';
  shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';


  myFilter = [
    'grayscale:100%',
  ];


  getMarker() {
    return this.marker;
  }

  iconDefault = new L.Icon({
    iconUrl: this.iconUrl,
    shadowUrl: this.shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  })

  marker = L.Marker.prototype.options.icon = this.iconDefault;

  corner1 = L.latLng(44.7769477403, 5.52260949059)
  corner2 = L.latLng(48.8308275417, 11.0427014502)

  bounds: L.LatLngBoundsExpression | undefined = new L.LatLngBounds(this.corner1, this.corner2);


  constructor(private markerService: MarkerService) { }

  initMap(center: L.LatLngExpression, zoom: number, scrollWheelZoom: boolean, minZoom = 8.5, mapname = 'map'): L.Map {
    console.log(mapname, "?");
    const map = L.map(mapname, {
      maxBounds: this.bounds,
      center: center,
      zoom: zoom,
      scrollWheelZoom: scrollWheelZoom,
      zoomSnap: 0.1
    });
    const tiles = (L.tileLayer as any).colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      className: 'tile-layer',
      minZoom: minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      filter: this.myFilter
    });
    tiles.addTo(map);
    return map;
  }

  ngAfterViewInit() {
  }

}
