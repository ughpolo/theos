import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import { Beitrag } from 'src/app/models/beitrag';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  @Input() beitrag: Beitrag = new Beitrag("", "", "", "", "");

  constructor() { }

  ngOnInit(): void {
    
  }

}
