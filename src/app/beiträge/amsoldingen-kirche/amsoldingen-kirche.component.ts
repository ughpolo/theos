import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { MapService } from 'src/app/components/services/map.service';
import { MarkerService } from 'src/app/components/services/marker.service';


@Component({
  selector: 'app-amsoldingen-kirche',
  templateUrl: './amsoldingen-kirche.component.html',
  styleUrls: ['./amsoldingen-kirche.component.scss']
})
export class AmsoldingenKircheComponent implements OnInit {

  coordinates: any;

  ids: string[] = [];

  maps: L.Map[] = [];

  author: any;

  title!: string;

pathname!: string;


    date!: string;

   

  constructor(protected dataService: DataServiceService, protected mapService: MapService, protected markerService: MarkerService, private router: Router) {
  }

  ngOnInit(): void {
    this.assign('Nicole Hublard', 'Amsoldingen Kirche');
    this.createIds();
  }

  assign(author: string, title: string) {
    const beitrag = this.dataService.getBeitrag(author, title);
    this.author = this.dataService.getAuthor(author, title);
     

    this.date = this.dataService.getDate(author, title)!;
    this.coordinates = beitrag!.markers;
    this.title = beitrag!.fulltitle; this.pathname = beitrag!.pathname;

    this.replaceWhiteSpace();
  }

  replaceWhiteSpace() {
    for (let i = 0; i < this.author.beitrag.length; i += 1) {
      this.author.pathname[i] = this.author.pathname[i].replace(/\s+/g, '-').toLowerCase();
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
  }




}
