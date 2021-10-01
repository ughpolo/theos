import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import "node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
import { MapService } from '../map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {




  map!: L.Map;

  constructor(protected mapService: MapService
  ) { }

  ngOnInit(): void {
    this.map = this.mapService.initMap([46.8182, 8.2275], [[46.7264, 7.5849], [46.9503, 7.4474]], 8, false);
  }


  ngAfterViewInit(): void {
  }

}