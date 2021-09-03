import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataServiceService } from '../data-service.service';
import { Beitrag } from '../models/beitrag';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items: Beitrag[] = []

  constructor(private dataSourceService: DataServiceService) { }

  ngOnInit(): void {
    this.items = this.dataSourceService.beiträge;
  }

  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin: 30,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      500: {
        items: 1
      },
      1000: {
        items: 2
      },
      1450: {
        items: 3
      },
      1700: {
        items: 4
      }


    },
    nav: true
  }

}
