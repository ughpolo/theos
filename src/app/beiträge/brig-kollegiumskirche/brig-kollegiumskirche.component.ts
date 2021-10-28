//Kopiere mich von hier:
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { MapService } from 'src/app/components/services/map.service';
import { MarkerService } from 'src/app/components/services/marker.service';
//Bis hier und setze mich an den gleichen Ort im neuen Beitrag. (Die Datei mit dem Blauen A)

@Component({
  selector: 'app-brig-kollegiumskirche',
  templateUrl: './brig-kollegiumskirche.component.html',
  styleUrls: ['./brig-kollegiumskirche.component.scss']
})
export class BrigKollegiumskircheComponent implements OnInit {

  coordinates: any;

  ids: string[] = [];

  maps: L.Map[] = [];

  author: any;

  title!: string;

  date!: string;

  constructor(protected markerService: MarkerService, protected dataService: DataServiceService, protected mapService: MapService) { }

  ngOnInit(): void {
    //Setze hier den Namen des Autors (Gleich wie im beiträge.ts file) und dann den Karuselltitel. WICHTIG: Müssen jeweils zwischen den zwei ' ' stehen.
    this.assign('Gerd Dönni', 'Kollegiumskirche');
    this.createIds();
  }

  assign(author: string, title: string) {
    const beitrag = this.dataService.getBeitrag(author, title);
    this.author = this.dataService.getAuthor(author, title);
    this.date = this.dataService.getDate(author, title)!;
    this.coordinates = beitrag!.markers;
    this.title = beitrag!.fulltitle;
  }

  createIds() {
    for (let i = 0; i < this.coordinates.length; i += 1) {
      this.ids.push(`${this.title}${i}`)
    }
  }

  ngAfterViewInit(): void {
    if (this.ids.length > 0) {
      for (let i = 0; i < this.coordinates.length; i += 1) {
        this.maps.push(this.mapService.initMap(this.coordinates[i], 16, true, 8.5, `${this.title}${i}`))
        this.markerService.makeMarkers(this.maps[i], this.coordinates[i])
      }
    }
  };
}
