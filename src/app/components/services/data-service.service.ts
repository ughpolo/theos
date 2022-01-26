import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Beitrag } from '../models/beitrag';
import { Beiträge } from 'src/app/beiträge';
import { Kantone } from '../models/kantone';



@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  alle: any = Beiträge;
  
  constructor(protected router: Router, private http: HttpClient) {
    this.assignBeiträge();
  }

  assignBeiträge() {
    for (const beitrag in this.alle) {
      const obj = this.alle[beitrag];
      this.beiträge.push(new Beitrag(obj.karusselltitel, obj.ort, `../../../../assets/images/${obj.bild}`, obj.autor, obj.jahr, obj.markierungen, obj.beitragtitel, obj.kanton))
    }
  
    this.assignAuthors();
    this.mergeMarkers();
    this.setDisplayLocation(this.beiträge);
  }
 
  orte: any;

  beiträge: Beitrag[] = [];

  kacheln: any = [];

  authors: { author: string, beitrag: string[],fulltitle: string[], location: string[] }[] = [];

  countArray: any = this.setDisplayLocation(this.beiträge);

  markers: any[][] = [];

  setDisplayLocation(beiträge: Beitrag[]) {
    let tempArray: { locationCat: string, count: number, title: string, image: string, location: string, titleArray: string[] }[] = [];
    for (let x = 0; x < beiträge.length; x += 1) {
      if (tempArray.length > 0) {
        let found = false;
        const length = tempArray.length;
        for (let y = 0; y < length; y += 1) {
          if (tempArray[y].location === beiträge[x].location!) {
            tempArray[y].count += 1;
            tempArray[y].titleArray.push(beiträge[x].title);
            found = true;
          }
        }
        if (!found) {
          tempArray.push({ locationCat: beiträge[x].locationCat!, count: 1, title: beiträge[x].title, image: beiträge[x].image, location: beiträge[x].location, titleArray: [beiträge[x].title] });
          found = true;
        }
      } else {
        tempArray.push({ locationCat: beiträge[x].locationCat!, count: 1, title: beiträge[x].title, image: beiträge[x].image, location: beiträge[x].location, titleArray: [beiträge[x].title] })
      }
    }
    this.orte = tempArray;
  }

  assignAuthors() {
    const beiträge = this.beiträge;
     for (let x = 0; x < beiträge.length; x += 1) {
      let obj = (this.authors.find(y => y.author === beiträge[x].author))
      let index;
      if (obj) {
        index = this.authors.indexOf(obj);
        this.authors[index].beitrag.push(beiträge[x].title);
        this.authors[index].fulltitle.push(beiträge[x].fulltitle);
        this.authors[index].location.push(beiträge[x].location);  
      } 
      else {
        this.authors.push({ author: beiträge[x].author, beitrag: [beiträge[x].title], location: [beiträge[x].location], fulltitle: [beiträge[x].fulltitle] })
      }
     
    }
 
  }

  getDate(author: string, title: string) {
    const beitrag = this.beiträge.find(x => x.title === title && x.author === author)
    return beitrag?.date;
  }

  getAuthor(name: string, title: string) {
    let author;
    let obj = this.authors.find(x => x.author === name);
    if (obj) {
      let index = this.authors.indexOf(obj);
      author = { ...this.authors[index] }
      author = this.filterCurrentPost(title, author);
    }
    return author;
  }

  getBeitrag(name: string, title: string) {
    const beitrag = this.beiträge.find(x => x.title === title && x.author === name)
    return beitrag;
  }

  filterCurrentPost(title: string, author: { author: string, beitrag: string[], location: string[], fulltitle: string[] }) {

    let posts = JSON.parse(JSON.stringify(author));
    let index = posts.beitrag.indexOf(title);
    if (index > -1) {
      posts.beitrag.splice(index, 1);
      posts.location.splice(index, 1);
      posts.fulltitle.splice(index, 1);
    }
    return posts;
  }

  mergeMarkers() {
    for (const beitrag of this.beiträge) {
      for (const marker of beitrag.markers) {
        this.markers.push(marker);
      }
    }
  }


}
