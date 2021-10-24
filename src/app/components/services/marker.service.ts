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


  iconRetinaUrl = 'assets/marker-icon-2x.png';
  iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png';
  shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';

  iconUrlRed = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png';

  iconDefault = new L.Icon({
    iconUrl: this.iconUrl,
    shadowUrl: this.shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  })

  iconRed = new L.Icon({
    iconUrl: this.iconUrlRed,
    shadowUrl: this.shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  })

  marker = L.Marker.prototype.options.icon = this.iconDefault;

  redMarker = L.Marker.prototype.options.icon = this.iconRed;

  makeMarkers(map: L.Map, coordinates?: any): void {
    if (coordinates) {
      let marker;
      marker = L.marker(coordinates, { icon: this.iconRed }).addTo(map);
      marker.bindPopup(this.popupService.makeCapitalPopup(coordinates));
    } else {
      for (const c of this.dataService.markers) {
        let marker;
        marker = L.marker([c[0], c[1]], { icon: this.iconRed }).addTo(map);
        marker.bindPopup(this.popupService.makeCapitalPopup(c));
      }
    }
  }

  // makeMarkers(map: L.Map, redMarkers?: any): void {
  //   for (const c of this.dataService.markers) {
  //     let marker;
  //     if (redMarkers) {
  //       if (redMarkers.includes(c)) {
  //         marker = L.marker([c[0], c[1]], { icon: this.iconRed }).addTo(map);
  //       } else {
  //         marker = L.marker([c[0], c[1]], { icon: this.iconDefault }).addTo(map);
  //       }
  //     } else {
  //       marker = L.marker([c[0], c[1]], { icon: this.iconRed }).addTo(map);
  //     }
  //     marker.bindPopup(this.popupService.makeCapitalPopup(c));
  //   }
  // }


}
