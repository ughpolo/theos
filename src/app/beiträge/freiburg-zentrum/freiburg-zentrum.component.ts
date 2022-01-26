//Kopiere mich von hier:
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { MapService } from 'src/app/components/services/map.service';
import { MarkerService } from 'src/app/components/services/marker.service';
//Bis hier und setze mich an den gleichen Ort im neuen Beitrag. (Die Datei mit dem Blauen A)

@Component({
  selector: 'app-freiburg-zentrum',
  templateUrl: './freiburg-zentrum.component.html',
  styleUrls: ['./freiburg-zentrum.component.scss']
})
export class FreiburgZentrumComponent implements OnInit {

  coordinates: any;

  ids: string[] = [];

  maps: L.Map[] = [];

  author: any;

  title!: string;

    date!: string;

   

  constructor(protected markerService: MarkerService, protected dataService: DataServiceService, protected mapService: MapService, private router: Router) { }

  ngOnInit(): void {
    //Setze hier den Namen des Autors (Gleich wie im beiträge.ts file) und dann den karusselltitel. WICHTIG: Müssen jeweils zwischen den zwei ' ' stehen.
    this.assign('Stefan Constantinescu', 'Studium der Ostkirchen');
    this.createIds();
  }

  assign(author: string, title: string) {
    const beitrag = this.dataService.getBeitrag(author, title);
    this.author = this.dataService.getAuthor(author, title);
     

    this.date = this.dataService.getDate(author, title)!;
    this.coordinates = beitrag!.markers;
    this.title = beitrag!.fulltitle;
    this.replaceWhiteSpace();
  }

  replaceWhiteSpace() {
    for (let i = 0; i < this.author.beitrag.length; i += 1) {
      this.author.beitrag[i] = this.author.beitrag[i].replace(/\s+/g, '-').toLowerCase();
    }
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

  changeRoute() {
    this.router.navigate(['/freiburg-centre-dorient'])
  }
}
