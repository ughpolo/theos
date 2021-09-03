import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../shape.service';
import "node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {



  myFilter = [
    'grayscale:100%',
  ];

  iconRetinaUrl = 'assets/marker-icon-2x.png';
  iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png';
  shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';



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




  private map: any;
  private cantons: any;
  tiles: any;

  private initMap(): void {
    this.map = L.map('map', {

      center: [46.8182, 8.2275],
      zoom: 8,
      scrollWheelZoom: false,
    });

    this.tiles = (L.tileLayer as any).colorFilter('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      className: 'tile-layer',
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      filter: this.myFilter
    });
    this.tiles.addTo(this.map);
    // this.map.removeLayer(this.tiles)
  }

  constructor(private shapeService: ShapeService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.shapeService.getStateShapes().subscribe(states => {
      this.cantons = states;
      // this.initStatesLayer();
      L.marker([46.7264, 7.5849]).addTo(this.map);
      L.marker([46.9503, 7.4474]).addTo(this.map);
    });
  }


  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.cantons, {
      style: (feature) => ({
        weight: 2,
        opacity: 1,
        color: 'rgb(0, 0, 0)',
        fillOpacity: 1,
        fillColor: 'rgb(60, 80, 90)'
      })
    });

    this.map.addLayer(stateLayer);
  }
}