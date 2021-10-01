import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './data-service.service';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(protected dataService: DataServiceService, protected popupService: PopupService) { }


  makeMarkers(map: L.Map, markers: any): void {
    for (const c of markers) {
      const marker = L.marker([c[0], c[1]]);
      marker.addTo(map);
      marker.bindPopup(this.popupService.makeCapitalPopup(c));
    }
  }

}
