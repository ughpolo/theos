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
import { BernKindlifresserbrunnenComponent } from './beiträge/bern-kindlifresserbrunnen/bern-kindlifresserbrunnen.component';
import { BernMuensterPortalComponent } from './beiträge/bern-muenster-portal/bern-muenster-portal.component';
import { BernHebammenpforteComponent } from './beiträge/bern-hebammenpforte/bern-hebammenpforte.component';
import { BernVinzenzComponent } from './beiträge/bern-vinzenz/bern-vinzenz.component';
import { BernTaeufergeschichteComponent } from './beiträge/bern-taeufergeschichte/bern-taeufergeschichte.component';
import { BernPaulKleeComponent } from './beiträge/bern-paul-klee/bern-paul-klee.component';
import { BielFilmpodiumComponent } from './beiträge/biel-filmpodium/biel-filmpodium.component';
import { BaselKraftwerkBirsfeldenComponent } from './beiträge/basel-kraftwerk-birsfelden/basel-kraftwerk-birsfelden.component';
import { BosseyOekumenischesInstitutComponent } from './beiträge/bossey-oekumenisches-institut/bossey-oekumenisches-institut.component';
import { BrigKollegiumskircheComponent } from './beiträge/brig-kollegiumskirche/brig-kollegiumskirche.component';
import { BuerenFederComponent } from './beiträge/bueren-feder/bueren-feder.component';
import { GraubuendenBenediktinerklosterComponent } from './beiträge/graubuenden-benediktinerkloster/graubuenden-benediktinerkloster.component';
import { EinsiedelnMadonnaComponent } from './beiträge/einsiedeln-madonna/einsiedeln-madonna.component';
import { EndingenFriedhofComponent } from './beiträge/endingen-friedhof/endingen-friedhof.component';
import { FreiburgZentrumComponent } from './beiträge/freiburg-zentrum/freiburg-zentrum.component';
import { CentreDorientComponent } from './beiträge/centre-dorient/centre-dorient.component';
import { GottliebenSchlossComponent } from './beiträge/gottlieben-schloss/gottlieben-schloss.component';
import { HindelbankKircheComponent } from './beiträge/hindelbank-kirche/hindelbank-kirche.component';
import { LuthernbadGnadenbrunnenComponent } from './beiträge/luthernbad-gnadenbrunnen/luthernbad-gnadenbrunnen.component';
import { LuzernSpreuerbrueckeComponent } from './beiträge/luzern-spreuerbruecke/luzern-spreuerbruecke.component';
import { ZhHeiligungsbewegungComponent } from './beiträge/zh-heiligungsbewegung/zh-heiligungsbewegung.component';
import { SoKlosterortComponent } from './beiträge/so-klosterort/so-klosterort.component';
import { RueggisbergMartinskircheComponent } from './beiträge/rueggisberg-martinskirche/rueggisberg-martinskirche.component';
import { SoVerenaschluchtComponent } from './beiträge/so-verenaschlucht/so-verenaschlucht.component';
import { ScherzlingenKircheComponent } from './beiträge/scherzlingen-kirche/scherzlingen-kirche.component';
import { SchoenewerdStiftskircheComponent } from './beiträge/schoenewerd-stiftskirche/schoenewerd-stiftskirche.component';
import { SimplonHospizComponent } from './beiträge/simplon-hospiz/simplon-hospiz.component';
import { SulzigWeitblickComponent } from './beiträge/sulzig-weitblick/sulzig-weitblick.component';
import { LondonChurchComponent } from './beiträge/london-church/london-church.component';
import { ZhBlindekuhComponent } from './beiträge/zh-blindekuh/zh-blindekuh.component';
import { SolothurnSpitalkircheComponent } from './beiträge/solothurn-spitalkirche/solothurn-spitalkirche.component';
import { AletschgletscherArmeSeelenComponent } from './beiträge/aletschgletscher-arme-seelen/aletschgletscher-arme-seelen.component';
import { BaselJuedischesMuseumComponent } from './beiträge/basel-juedisches-museum/basel-juedisches-museum.component';
import { RueegsauReformierteKircheComponent } from './beiträge/rueegsau-reformierte-kirche/rueegsau-reformierte-kirche.component';








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
    BernKindlifresserbrunnenComponent,
    BernMuensterPortalComponent,
    BernHebammenpforteComponent,
    BernVinzenzComponent,
    BernTaeufergeschichteComponent,
    BernPaulKleeComponent,
    BielFilmpodiumComponent,
    BaselKraftwerkBirsfeldenComponent,
    BosseyOekumenischesInstitutComponent,
    BrigKollegiumskircheComponent,
    BuerenFederComponent,
    GraubuendenBenediktinerklosterComponent,
    EinsiedelnMadonnaComponent,
    EndingenFriedhofComponent,
    FreiburgZentrumComponent,
    CentreDorientComponent,
    GottliebenSchlossComponent,
    HindelbankKircheComponent,
    LuthernbadGnadenbrunnenComponent,
    LuzernSpreuerbrueckeComponent,
    ZhHeiligungsbewegungComponent,
    SoKlosterortComponent,
    RueggisbergMartinskircheComponent,
    SoVerenaschluchtComponent,
    ScherzlingenKircheComponent,
    SchoenewerdStiftskircheComponent,
    SimplonHospizComponent,
    SulzigWeitblickComponent,
    LondonChurchComponent,
    ZhBlindekuhComponent,
    SolothurnSpitalkircheComponent,
    AletschgletscherArmeSeelenComponent,
    BaselJuedischesMuseumComponent,
    RueegsauReformierteKircheComponent,
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
