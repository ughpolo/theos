import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { MarkerService } from 'src/app/marker.service';
import { RemoveshitespacesPipe } from '../../custompipe/removeshitespaces.pipe';

@Component({
  selector: 'app-baptisterium',
  templateUrl: './baptisterium.component.html',
  styleUrls: ['./baptisterium.component.scss']
})
export class BaptisteriumComponent implements OnInit {

  coordinates: any;

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected markerService: MarkerService, protected dataService: DataServiceService, protected mapService: MapService) { }

  ngOnInit(): void {
    this.assign('Maria Lissek', 'Baptisterium', 'Baptisterien aus dem 5. und 6. Jahrhundert in der heutigen Schweiz');
    this.map = this.mapService.initMap([46.8182, 8.2275], 7.5, true, 7.5);
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
