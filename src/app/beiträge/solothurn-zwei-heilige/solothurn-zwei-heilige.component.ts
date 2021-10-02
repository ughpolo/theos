import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { MarkerService } from 'src/app/marker.service';
import { RemoveshitespacesPipe } from '../../custompipe/removeshitespaces.pipe';

@Component({
  selector: 'app-solothurn-zwei-heilige',
  templateUrl: './solothurn-zwei-heilige.component.html',
  styleUrls: ['./solothurn-zwei-heilige.component.scss']
})
export class SolothurnZweiHeiligeComponent implements OnInit {
  coordinates!: any;

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected markerService: MarkerService, protected dataService: DataServiceService, protected mapService: MapService) { }

  ngOnInit(): void {
    this.assign('Joël Meier', 'Solothurn Zwei Heilige', 'Zwei Heilige überblicken Solothurn');
    this.map = this.mapService.initMap([47.209, 7.5394], 16, true);
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
