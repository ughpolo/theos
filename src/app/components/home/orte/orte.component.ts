import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';
import { Beitrag } from '../../models/beitrag';

@Component({
  selector: 'app-orte',
  templateUrl: './orte.component.html',
  styleUrls: ['./orte.component.scss']
})
export class OrteComponent implements OnInit {

  kacheln: { locationCat: string, count: number, title: string, image: string, location: string, titleArray: string[] }[] = [];



  constructor(private dataSourceService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.kacheln = this.dataSourceService.orte;
    //sorts the array alphabetically. If count > 2 then compare locationCategory instead of location
    this.kacheln.sort(function (a, b) {
      if (a.count >= 2 && b.count < 2) {
        if (a.locationCat < b.location) { return -1 }
        if (a.locationCat > b.location) { return 1; }
      } else if (a.count >= 2 && b.count >= 2) {
        if (a.locationCat < b.locationCat) { return -1 }
        if (a.locationCat > b.locationCat) { return 1; }
      } else if (a.count < 2 && b.count >= 2) {
        if (a.location < b.locationCat) { return -1; }
        if (a.location > b.locationCat) { return 1; }
      } else if (a.count < 2 && b.count < 2) {
        if (a.location < b.location) { return -1; }
        if (a.location > b.location) { return 1; }
      }
      return 0;
    })
  }

  route(beitrag: any) {
    this.router.navigateByUrl(`/${beitrag}`)
  }


}
