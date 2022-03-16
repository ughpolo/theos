import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(protected dataService: DataServiceService) { }


  makeCapitalPopup(data: any) {
    const beitrag = this.dataService.beiträge.find(beitrag => beitrag.markers.includes(data))
    const link = `/${beitrag!.pathname}`
    return `<div> ${beitrag?.author}</div>` +
      `<div><a style="color: black" target="_self" href="${link}">${beitrag?.title}</a></div>`
  }


}
