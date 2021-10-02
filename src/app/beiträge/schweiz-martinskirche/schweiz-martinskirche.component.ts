import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { MarkerService } from 'src/app/marker.service';

@Component({
  selector: 'app-schweiz-martinskirche',
  templateUrl: './schweiz-martinskirche.component.html',
  styleUrls: ['./schweiz-martinskirche.component.scss']
})
export class SchweizMartinskircheComponent implements OnInit {

  coordinates: any;

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected dataService: DataServiceService, protected mapService: MapService, protected markerService: MarkerService) { }

  ngOnInit(): void {
    this.assign('Angela Berlis', 'Kirche St.Martin', 'Spuren eines vielfachen Erinnerungsträgers – Martin von Tours und seine Kultorte');
    this.map = this.mapService.initMap([46.7272, 7.57891], 7, true, 7.5);
  }

  assign(author: string, beitrag: string, title: string) {
    this.author = this.dataService.getAuthor(author, beitrag);
    this.date = this.dataService.getDate(author, beitrag)!;
    this.title = title;
    this.coordinates = this.dataService.getBeitrag(author, beitrag)?.markers;
  }

  ngAfterViewInit(): void {
    this.markerService.makeMarkers(this.map, this.coordinates);
  }

}
