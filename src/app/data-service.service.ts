import { Injectable } from '@angular/core';
import { Beitrag } from './models/beitrag';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  

  beiträge: Beitrag[] = [
    new Beitrag("Kirche", "Amsoldingen", "../../../assets/images/amsoldingen/amsoldingen.jpg","Nicole Hublard" , "2010", "BE"),
    new Beitrag("Cigognier-Heiligtum", "Avenches", "../../../assets/images/cigognier/avenches.jpg", "Sara Egger", "2018", "VD"),
    new Beitrag("Baptisterium", "Bad Zurzach","../../../assets/images/baptisterium/bad_zurzach_baptisterium.jpg" , "Maria Lissek", "2016", "AG"),
    new Beitrag("Kirche St.Martin", "Basel", "../../../assets/images/stmartin/martin_basel.jpg", "Angela Berlis", "2016", "BS"),
    new Beitrag("Kapelle", "Belalp", "../../../assets/images/belalp/belalpKapelle.jpg", "Gerd Dönni","2020", "VS" ),
    new Beitrag("L'abbatiale", "Bellelay", "../../../assets/images/abbatiale/bellelay_abbatiale.jpg","Lara A. Kneubühler", "2016", "JU"),
    new Beitrag("Antoniterkirche", "Bern", "../../../assets/images/antoniterkirche/antoniterkirche_heimlich.jpg", "Nadja Heimlicher", "2016", "BE"),
    new Beitrag("Antoniterkirche Antonius-Fresken", "Bern", "../../../assets/images/antoniterkirche/antoniterkirche_talking.jpg", "Katharina Heyden", "2020", "BE" )
  ]


}
