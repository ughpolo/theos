import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { MapService } from 'src/app/map.service';
import { RemoveshitespacesPipe } from '../../custompipe/removeshitespaces.pipe';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-amsoldingen',
  templateUrl: './amsoldingen.component.html',
  styleUrls: ['./amsoldingen.component.scss']
})
export class AmsoldingenComponent implements OnInit {


  map!: L.Map;

  author: any;

  title!: string;

  date!: string;

  constructor(protected dataService: DataServiceService, protected mapService: MapService) { }

  ngOnInit(): void {
    this.assign('Nicole Hublard', 'Die Kirche Amsoldingen – ein Juwel im Berner Oberland');
    this.map = this.mapService.initMap([46.7272, 7.57891], [[46.7272, 7.57891]], 16, true);
  }

  assign(author: string, beitrag: string) {
    this.author = this.dataService.getAuthor(author, beitrag);
    this.date = this.dataService.getDate(author, beitrag)!;
    this.title = beitrag;
  }




}
