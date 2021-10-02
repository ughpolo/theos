import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { MarkerService } from 'src/app/marker.service';


@Component({
  selector: 'app-amsoldingen-kirche',
  templateUrl: './amsoldingen-kirche.component.html',
  styleUrls: ['./amsoldingen-kirche.component.scss']
})
export class AmsoldingenKircheComponent implements OnInit {

  coordinates: any;

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected dataService: DataServiceService, protected mapService: MapService, protected markerService: MarkerService) { }

  ngOnInit(): void {
    this.assign('Nicole Hublard', 'Amsoldingen Kirche', 'Die Kirche Amsoldingen – ein Juwel im Berner Oberland');
    this.map = this.mapService.initMap([46.7272, 7.57891], 16, true);
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
