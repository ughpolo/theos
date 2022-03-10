import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { Beitrag } from 'src/app/components/models/beitrag';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {

  @Input() beitrag: Beitrag = new Beitrag("", "", "", "", "", "", [[]], "");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(beitrag: Beitrag) {
    let temp = beitrag.pathname.replace(/\s+/g, '-').toLowerCase();
    let url = temp.replace(/\’+|\'+/g, '');
    this.router.navigateByUrl(`${url}`)
  }
}
