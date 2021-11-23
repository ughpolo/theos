import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/components/services/data-service.service';
import { Beitrag } from 'src/app/components/models/beitrag';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ort-item',
  templateUrl: './ort-item.component.html',
  styleUrls: ['./ort-item.component.scss']
})
export class OrtItemComponent implements OnInit {

  @Input() beitrag: { locationCat: string, count: number, title: string, image: string, location: string, titleArray: string[] } = { locationCat: "", count: 0, title: "", image: "", location: "", titleArray: [] }



  location: string = "";

  constructor(protected dataSourceService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.location = this.beitrag.locationCat!;
    this.allLocations = this.beitrag.titleArray;

  }


  allLocations: string[] = [];


  isbe(beitrag: any) {
    if (beitrag.count > 1) {
      console.log(this.beitrag.locationCat);
      this.beitrag.image = `../../../assets/images/kanton/${this.beitrag.locationCat}.jpg`
      return true;
    }
    return false;
  }

  select(event: string) {

    let url = event.replace(/\s+/g, '-').toLowerCase();
    this.router.navigateByUrl(`/${url}`)
  }

}