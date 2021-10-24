import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { OrteComponent } from './components/home/orte/orte.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatButtonModule } from '@angular/material/button';
import { VoyageComponent } from './components/home/voyage/voyage.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { OrtItemComponent } from './components/home/orte/ort-item/ort-item.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { AmsoldingenKircheComponent } from './beiträge/amsoldingen-kirche/amsoldingen-kirche.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { IhrbeitragComponent } from './components/ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './components/team/team.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';
import { ReisehinweiseComponent } from './components/reisehinweise/reisehinweise.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './components/services/marker.service';
import { ShapeService } from './components/services/shape.service';
import { RemoveshitespacesPipe } from './components/custompipe/removeshitespaces.pipe';
import { AboutComponent } from './components/about/about.component';
import { TitleImageComponent } from './components/title-image/title-image.component';
import { BaptisteriumComponent } from './beiträge/badzurzach-baptisterium/baptisterium.component';


import { SolothurnZweiHeiligeComponent } from './beiträge/solothurn-zwei-heilige/solothurn-zwei-heilige.component';
import { AvenchesCigognierHeiligtumComponent } from './beiträge/avenches-cigognier-heiligtum/avenches-cigognier-heiligtum.component';
import { SchweizMartinskircheComponent } from './beiträge/schweiz-martinskirche/schweiz-martinskirche.component';
import { BaselVincentiustafelComponent } from './beiträge/basel-vincentiustafel/basel-vincentiustafel.component';
import { BelalpKapelleComponent } from './beiträge/belalp-kapelle/belalp-kapelle.component';
import { BellelayAbbatialeComponent } from './beiträge/bellelay-abbatiale/bellelay-abbatiale.component';
import { BernAntoniterkircheComponent } from './beiträge/bern-antoniterkirche/bern-antoniterkirche.component';
import { BernAntoniterkircheAntoniusFreskenComponent } from './beiträge/bern-antoniterkirche-antonius-fresken/bern-antoniterkirche-antonius-fresken.component';
import { BernTotentanzComponent } from './beiträge/bern-totentanz/bern-totentanz.component';
import { BetlehemBegegnungenBetlehemComponent } from './beiträge/betlehem-begegnungen-betlehem/betlehem-begegnungen-betlehem.component';
import { BernBurgerspitalComponent } from './beiträge/bern-burgerspital/bern-burgerspital.component';
import { BernDuerrenmattMansardeComponent } from './beiträge/bern-duerrenmatt-mansarde/bern-duerrenmatt-mansarde.component';
import { HausDerReligionenComponent } from './beiträge/haus-der-religionen/haus-der-religionen.component';








@NgModule({
  declarations: [
    BaptisteriumComponent,
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    VoyageComponent,
    OrteComponent,
    OrtItemComponent,
    CarouselItemComponent,
    AmsoldingenKircheComponent,
    HomeComponent,
    ContactComponent,
    IhrbeitragComponent,
    TeamComponent,
    MapComponent,
    FooterComponent,
    ReisehinweiseComponent,
    RemoveshitespacesPipe,
    AboutComponent,
    TitleImageComponent,
    SolothurnZweiHeiligeComponent,
    AvenchesCigognierHeiligtumComponent,
    SchweizMartinskircheComponent,
    BaselVincentiustafelComponent,
    BelalpKapelleComponent,
    BellelayAbbatialeComponent,
    BernAntoniterkircheComponent,
    BernAntoniterkircheAntoniusFreskenComponent,
    BernTotentanzComponent,
    BetlehemBegegnungenBetlehemComponent,
    BernBurgerspitalComponent,
    BernDuerrenmattMansardeComponent,
    HausDerReligionenComponent,
  ],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    StickyNavModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ShapeService,
    MarkerService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
