import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss']
})
export class TitleImageComponent implements OnInit {

  @Input() title!: string;

  @Input() author!: string;

  @Input() date!: string;

  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
    

  }

}
