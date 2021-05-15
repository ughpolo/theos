import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Beitrag } from '../../models/beitrag';

@Component({
  selector: 'app-orte',
  templateUrl: './orte.component.html',
  styleUrls: ['./orte.component.css']
})
export class OrteComponent implements OnInit {

  kacheln:{locationCat: string, count: number, title: string, image: string, location: string, titleArray: string[]}[] = [];

  

  constructor(private dataSourceService: DataServiceService) { }

  ngOnInit(): void {
    this.dataSourceService.setDisplayLocation(this.dataSourceService.beiträge);
    this.kacheln = this.dataSourceService.countArray;
    //sorts the array alphabetically. If count > 2 then compare locationCategory instead of location
    this.kacheln.sort(function(a, b){
      if(a.count >= 2 && b.count < 2){
        if(a.locationCat < b.location) { return -1}
        if(a.locationCat > b.location) { return 1; }
      }else if(a.count >= 2 && b.count >= 2){
        if(a.locationCat < b.locationCat) { return -1}
        if(a.locationCat > b.locationCat) { return 1; }
      }else if(a.count < 2 && b.count >= 2){
        if(a.location < b.locationCat) { return -1; }
        if(a.location > b.locationCat) { return 1; }
      }else if(a.count < 2 && b.count < 2){
        if(a.location < b.location) { return -1; }
        if(a.location > b.location) { return 1; }
    }
      return 0;
  })

  }


}
