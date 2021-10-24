import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import "node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js"
import { DataServiceService } from '../services/data-service.service';
import { MapService } from '../services/map.service';
import { MarkerService } from '../services/marker.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  markers!: any[];

  map!: L.Map;

  constructor(private markerService: MarkerService, protected mapService: MapService, protected dataService: DataServiceService
  ) { }

  ngOnInit(): void {
    this.markers = this.dataService.markers;
    this.map = this.mapService.initMap([46.8182, 8.2275], 8.5, false, 8, 'map');
  }


  ngAfterViewInit(): void {
    this.markerService.makeMarkers(this.map);
  }

}