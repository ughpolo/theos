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
      this.beiträge.push(new Beitrag(obj.karuselltitel, obj.ort, `../../../../assets/images/${obj.bild}`, obj.autor, obj.jahr, obj.markierungen, obj.beitragtitel, obj.kanton))
    }
    this.assignAuthors();
    this.mergeMarkers();
    this.setDisplayLocation(this.beiträge);
  }

  orte: any;

  beiträge: Beitrag[] = [

    // new Beitrag("Solothurn Zwei Heilige", "Solothurn", "../../../assets/images/solothurnzweiheilige/kathedrale.jpg", "Joël Meier", "2021", [[47.209, 7.5394]], Kantone.Solothurn),
    // new Beitrag("Amsoldingen Kirche", "Amsoldingen", "../../../assets/images/amsoldingen-kirche/amsoldingen.jpg", "Nicole Hublard", "2010", [[46.7272, 7.57891]], Kantone.Bern),

    // new Beitrag("Cigognier-Heiligtum", "Avenches", "../../../assets/images/avenches-cigognier-heiligtum/avenches.jpg", "Sara Egger", "2018", [[46.881, 7.04265]], Kantone.Wadt),
    // new Beitrag("Baptisterium", "Bad Zurzach", "../../../assets/images/badzurzach-baptisterium/bad_zurzach_baptisterium.jpg", "Maria Lissek", "2016", [[47.58543, 8.30062], [45.90469, 8.97095], [46.2197, 7.00367]], Kantone.Aargau),
    // new Beitrag("Kirche St.Martin", "Basel", "../../../assets/images/schweiz-martinskirche/martin_basel.jpg", "Angela Berlis", "2016", [[47.55907, 7.58861], [47.53123, 7.8109], [46.63449, 9.44162]], Kantone.BaselStadt),
    // new Beitrag("Kapelle", "Belalp", "../../../assets/images/belalp/belalpKapelle.jpg", "Gerd Dönni", "2020", "VS"),
    // new Beitrag("L'abbatiale", "Bellelay", "../../../assets/images/abbatiale/bellelay_abbatiale.jpg", "Lara A. Kneubühler", "2016", "JU"),
    // new Beitrag("Antoniterkirche", "Bern", "../../../assets/images/antoniterkirche/antoniterkirche_heimlich.jpg", "Nadja Heimlicher", "2016", "Bern"),
    // new Beitrag("Antoniterkirche Antonius-Fresken", "Bern", "../../../assets/images/antoniterkirche/antoniterkirche_talking.jpg", "Katharina Heyden", "2020", "Bern"),
    // new Beitrag("Berner Totentanz", "Bern", "../../../assets/images/totentanz/totentanz.jpg", "Matthias D. Berger", "2021", "Bern"),
    // new Beitrag("Betlehem Kirche", "Bern", "../../../assets/images/betlehem/bernbetlehem.jpg", "Andreas Köhler-Andereggen", "2020", "Bern"),
    // new Beitrag("Ehemaliges Burgerspital", "Bern", "../../../assets/images/goldenenLettern/goldenenLettern.jpeg", "Matthias Käser", "2020", "Bern"),
    // new Beitrag("Dürrenmatts Mansarde", "Bern", "../../../assets/images/duerrenmattMansarde/duerrenmattMansarde.jpg", "Christoph Morgenthaler", "2020", "Bern"),
    // new Beitrag("Haus der Religionen", "Europaplatz", "../../../assets/images/hausderreligionen/hausDerReligionen.jpg", "Anna-Konstanze Schröder", "2016", "Bern"),
    // new Beitrag("Kindlifresserbrunnen", "Kornhausplatz", "../../../assets/images/kindlifresser/bern_kindlifresserbrunnen.jpg", "René Bloch", "2020", "Bern"),

    // new Beitrag("Kraftwerk Birsfelden", "Birsfelden", "../../../assets/images/birsfelden/birsfelden_kraftwerk.jpg", "Georg Kreis", "2020", "Basel"),
    // new Beitrag("Ökumenisches Institut", "Bossey", "../../../assets/images/oekumenischesinstitut/oekumenisch.jpeg", "David Zimmer", "2019", "Vaud"),
    // new Beitrag("Kollegiumskirche", "Brig", "../../../assets/images/kollegiumskirche/kollegiumskirche.jpg", "Gerd Dönni", "2020", "Valais"),
    // new Beitrag("Feder", "Büren an der Aare", "../../../assets/images/feder/feder.jpg", "Dominik von Allmen", "2016", "Bern"),
    // new Beitrag("Benediktinerkloster", "Disentis", "../../../assets/images/disentis/disentis.jpg", "Jan Peter Lang", "2021", "Graubünden"),
    // new Beitrag("Synagogen und Friedhof", "Endingen & Lengnau", "../../../assets/images/endingen/endingen.jpg", "René Bloch", "2016", "Aargau"),
    // new Beitrag("Studium der Ostkirchen", "Fribourg", "../../../assets/images/ostkirchen/ostkirchen.jpg", "Stefan Constantinescu", "2020", "Fribourg"),
    // new Beitrag("Schloss Gottlieben", "Gottlieben", "../../../assets/images/gottlieben/gottlieben.jpg", "Zbynek Kindschi Garsky", "2016", "Thurgau"),
    // new Beitrag("Hindelbank Kirche", "Hindelbank", "../../../assets/images/hindelbank/hindelbank.jpg", "Hans Herrmann", "2019", "Bern"),
    // new Beitrag("Gnadenbrunnen", "Luthernbad", "../../../assets/images/gnadenbrunnen/gnadenbrunnen.jpg", "Hans Herrmann", "2019", "Luzern"),
    // new Beitrag("Spreuerbrücke", "Luzern", "../../../assets/images/spreuerbruecke/spreuerbruecke.jpg", "Sina von Aesch", "2021", "Luzern"),
    // new Beitrag("Zentrum der Heiligungsbewegung", "Männerdorf", "../../../assets/images/heiligungsbewegung/heiligungsbewegung.jpg", "Gergely Csukás", "2016", "Zürich"),
    // new Beitrag("Klosterort", "Mariastein", "../../../assets/images/klosterort/klosterort.jpg", "Pater Lukas Schenker", "2021", "Solothurn"),
    // new Beitrag("Martinskirche", "Rüeggisberg", "../../../assets/images/rueggisberg/rueggisberg.jpg", "Elisabeth Willen-Lanzrein", "2019", "Bern"),
    // new Beitrag("Verenaschlucht", "Rüttenen", "../../../assets/images/verenaschlucht/verenaschlucht.jpg", "Raphael Hadorn", "2021", "Solothurn"),
    // new Beitrag("Scherzligen Kirche", "Scherzligen", "../../../assets/images/scherzlingen/scherzlingen.jpg", "Markus Nägeli", "2019", "Thun"),
    // new Beitrag("Stiftskirche St. Leodegar", "Schönenwerd", "../../../assets/images/leodegar/leodegar.jpg", "Adrian Suter", "2016", "Solothurn"),
    // new Beitrag("Swiss Church in London", "London", "../../../assets/images/london/london.jpg", "Carla Maurer", "2020", "London"),
    // new Beitrag("Restaurant Blinde Kuh", "Mühlebachstrasse", "../../../assets/images/blindekuh/blindekuh.jpg", "Christoph Sigrist", "2016", "Zürich"),






  ]

  kacheln: any = [];

  authors: { author: string, beitrag: string[] }[] = [];

  countArray: any = this.setDisplayLocation(this.beiträge);

  markers: any[][] = [];

  setDisplayLocation(beiträge: Beitrag[]) {
    let tempArray: { locationCat: string, count: number, title: string, image: string, location: string, titleArray: string[] }[] = [];
    for (let x = 0; x < beiträge.length; x += 1) {
      if (tempArray.length > 0) {
        let found = false;
        const length = tempArray.length;
        for (let y = 0; y < length; y += 1) {
          if (tempArray[y].locationCat === beiträge[x].locationCat!) {
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
      } else {
        this.authors.push({ author: beiträge[x].author, beitrag: [beiträge[x].title] })
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
      author = this.authors[index];
      author = this.filterCurrentPost(title, author);
    }
    return author;
  }

  getBeitrag(name: string, title: string) {
    const beitrag = this.beiträge.find(x => x.title === title && x.author === name)
    return beitrag;
  }

  filterCurrentPost(title: string, author: { author: string, beitrag: string[] }) {
    let posts = author;
    let index = posts.beitrag.indexOf(title);
    if (index > -1) {
      posts.beitrag.splice(index, 1);
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
