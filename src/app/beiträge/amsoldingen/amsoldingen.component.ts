import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
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

  author: any;

  constructor(protected dataService: DataServiceService) { }

  ngOnInit(): void {
    this.author = this.dataService.getAuthor('Nicole Hublard', 'Amsoldingen Kirche')
  }



}
