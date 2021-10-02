import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { MarkerService } from 'src/app/marker.service';

@Component({
  selector: 'app-avenches-cigognier-heiligtum',
  templateUrl: './avenches-cigognier-heiligtum.component.html',
  styleUrls: ['./avenches-cigognier-heiligtum.component.scss']
})
export class AvenchesCigognierHeiligtumComponent implements OnInit {

  coordinates: any;

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected dataService: DataServiceService, protected mapService: MapService, protected markerService: MarkerService) { }

  ngOnInit(): void {
    this.assign('Sara Egger', 'Cigognier-Heiligtum', 'Das Cigognier-Heiligtum und der Kaiserkult');
    this.map = this.mapService.initMap([46.88101, 7.04265], 16, true);
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
