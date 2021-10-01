import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { RemoveshitespacesPipe } from '../../custompipe/removeshitespaces.pipe';

@Component({
  selector: 'app-baptisterium',
  templateUrl: './baptisterium.component.html',
  styleUrls: ['./baptisterium.component.scss']
})
export class BaptisteriumComponent implements OnInit {

  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected dataService: DataServiceService, protected mapService: MapService) { }

  ngOnInit(): void {
    this.assign('Maria Lissek', 'Baptisterien aus dem 5. und 6. Jahrhundert in der heutigen Schweiz');
    this.map = this.mapService.initMap([47.58538, 8.30066], [[47.58538, 8.30066], [45.90465, 8.97092], [46.21969, 7.0037]], 14, true);
  }

  assign(author: string, beitrag: string) {
    this.author = this.dataService.getAuthor(author, beitrag);
    this.date = this.dataService.getDate(author, beitrag)!;
    this.title = beitrag;
  }

}
