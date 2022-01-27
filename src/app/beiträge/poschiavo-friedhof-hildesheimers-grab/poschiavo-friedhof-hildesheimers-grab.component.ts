import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { MapService } from 'src/app/components/services/map.service';
import { MarkerService } from 'src/app/components/services/marker.service';

@Component({
  selector: 'app-poschiavo-friedhof-hildesheimers-grab',
  templateUrl: './poschiavo-friedhof-hildesheimers-grab.component.html',
  styleUrls: ['./poschiavo-friedhof-hildesheimers-grab.component.scss'],
})
export class PoschiavoFriedhofHildesheimersGrabComponent implements OnInit {
  ngOnInit(): void {
    this.assign('Valérie Rhein', 'Friedhof: Hildesheimers Grab');
    this.createIds();
  }

  coordinates: any;

  ids: string[] = [];

  maps: L.Map[] = [];

  author: any;

  title!: string;

  date!: string;

  constructor(
    protected markerService: MarkerService,
    protected dataService: DataServiceService,
    protected mapService: MapService
  ) {}

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
      this.author.beitrag[i] = this.author.beitrag[i]
        .replace(/\s+/g, '-')
        .toLowerCase();
    }
  }
  createIds() {
    for (let i = 0; i < this.coordinates.length; i += 1) {
      this.ids.push(`${this.title}${i}`);
    }
  }

  ngAfterViewInit(): void {
    if (this.ids.length > 0) {
      for (let i = 0; i < this.coordinates.length; i += 1) {
        this.maps.push(
          this.mapService.initMap(
            this.coordinates[i],
            16,
            true,
            8.5,
            `${this.title}${i}`
          )
        );
        this.markerService.makeMarkers(this.maps[i], this.coordinates[i]);
      }
    }
  }
}
