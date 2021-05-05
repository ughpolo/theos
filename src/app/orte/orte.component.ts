import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Beitrag } from '../models/beitrag';

@Component({
  selector: 'app-orte',
  templateUrl: './orte.component.html',
  styleUrls: ['./orte.component.css']
})
export class OrteComponent implements OnInit {

  kacheln:Beitrag[] = [];

  constructor(private dataSourceService: DataServiceService) { }

  ngOnInit(): void {
    this.kacheln = this.dataSourceService.beiträge;
  }


}
