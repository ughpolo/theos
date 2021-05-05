import { Component, Input, OnInit } from '@angular/core';
import { Beitrag } from 'src/app/models/beitrag';

@Component({
  selector: 'app-ort-item',
  templateUrl: './ort-item.component.html',
  styleUrls: ['./ort-item.component.css']
})
export class OrtItemComponent implements OnInit {

  @Input() beitrag: Beitrag = new Beitrag("", "", "", "", "");

  image = "../../../assets/images/amsoldingen/amsoldingen.jpg";

  constructor() { }

  ngOnInit(): void {
    console.log(this.beitrag);
  }

}
