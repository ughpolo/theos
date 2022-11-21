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
import {
  APP_BASE_HREF,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
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
import { BaselMartinskircheComponent } from './beiträge/basel-martinskirche/basel-martinskirche.component';
import { BaselVincentiustafelComponent } from './beiträge/basel-vincentiustafel/basel-vincentiustafel.component';
import { BelalpKapelleComponent } from './beiträge/belalp-kapelle/belalp-kapelle.component';
import { BellelayAbbatialeComponent } from './beiträge/bellelay-abbatiale/bellelay-abbatiale.component';
import { BernAntoniterkircheComponent } from './beiträge/bern-antoniterkirche/bern-antoniterkirche.component';
import { BernAntoniterkircheAntoniusFreskenComponent } from './beiträge/bern-antoniterkirche-antonius-fresken/bern-antoniterkirche-antonius-fresken.component';
import { BernTotentanzComponent } from './beiträge/bern-totentanz/bern-totentanz.component';
import { BetlehemBegegnungenBetlehemComponent } from './beiträge/betlehem-begegnungen-betlehem/betlehem-begegnungen-betlehem.component';
import { BernBurgerspitalComponent } from './beiträge/bern-burgerspital/bern-burgerspital.component';
import { BernDuerrenmattMansardeComponent } from './beiträge/bern-duerrenmatt-mansarde/bern-duerrenmatt-mansarde.component';
import { BernHausDerReligionenComponent } from './beiträge/bern-haus-der-religionen/bern-haus-der-religionen.component';
import { BernKindlifresserbrunnenComponent } from './beiträge/bern-kindlifresserbrunnen/bern-kindlifresserbrunnen.component';
import { BernMuensterPortalComponent } from './beiträge/bern-muenster-portal/bern-muenster-portal.component';
import { BernHebammenpforteComponent } from './beiträge/bern-hebammenpforte/bern-hebammenpforte.component';
import { BernVinzenzComponent } from './beiträge/bern-vinzenz/bern-vinzenz.component';
import { BernTaeufergeschichteComponent } from './beiträge/bern-taeufergeschichte/bern-taeufergeschichte.component';
import { BernPaulKleeComponent } from './beiträge/bern-paul-klee/bern-paul-klee.component';
import { BielFilmpodiumComponent } from './beiträge/biel-filmpodium/biel-filmpodium.component';
import { BaselKraftwerkBirsfeldenComponent } from './beiträge/birsfelden-kraftwerk/birsfelden-kraftwerk.component';
import { BosseyOekumenischesInstitutComponent } from './beiträge/bossey-oekumenisches-institut/bossey-oekumenisches-institut.component';
import { BrigKollegiumskircheComponent } from './beiträge/brig-kollegiumskirche/brig-kollegiumskirche.component';
import { BuerenFederComponent } from './beiträge/bueren-feder/bueren-feder.component';
import { EinsiedelnMadonnaComponent } from './beiträge/einsiedeln-madonna/einsiedeln-madonna.component';
import { EndingenFriedhofComponent } from './beiträge/endingen-friedhof/endingen-friedhof.component';
import { FreiburgZentrumComponent } from './beiträge/freiburg-zentrum/freiburg-zentrum.component';
import { FreiburgCentreDorientComponent } from './beiträge/freiburg-centre-dorient/freiburg-centre-dorient.component';
import { GottliebenSchlossComponent } from './beiträge/gottlieben-schloss/gottlieben-schloss.component';
import { HindelbankKircheComponent } from './beiträge/hindelbank-kirche/hindelbank-kirche.component';
import { LuthernbadGnadenbrunnenComponent } from './beiträge/luthernbad-gnadenbrunnen/luthernbad-gnadenbrunnen.component';
import { LuzernSpreuerbrueckeComponent } from './beiträge/luzern-spreuerbruecke/luzern-spreuerbruecke.component';
import { MariasteinKlosterortComponent } from './beiträge/mariastein-klosterort/mariastein-klosterort.component';
import { RueggisbergMartinskircheComponent } from './beiträge/rueggisberg-martinskirche/rueggisberg-martinskirche.component';
import { RuettenenVerenaschluchtComponent } from './beiträge/ruettenen-verenaschlucht/ruettenen-verenaschlucht.component';
import { ScherzligenKircheComponent } from './beiträge/scherzligen-kirche/scherzligen-kirche.component';
import { SchoenenwerdStiftskircheComponent } from './beiträge/schoenenwerd-stiftskirche/schoenenwerd-stiftskirche.component';
import { SimplonHospizComponent } from './beiträge/simplon-hospiz/simplon-hospiz.component';
import { SulzigWeitblickComponent } from './beiträge/sulzig-weitblick/sulzig-weitblick.component';
import { LondonChurchComponent } from './beiträge/london-church/london-church.component';
import { ZuerichBlindekuhComponent } from './beiträge/zuerich-blindekuh/zuerich-blindekuh.component';
import { SolothurnSpitalkircheComponent } from './beiträge/solothurn-spitalkirche/solothurn-spitalkirche.component';
import { AletschgletscherArmeSeelenComponent } from './beiträge/aletschgletscher-arme-seelen/aletschgletscher-arme-seelen.component';
import { BaselJuedischesMuseumComponent } from './beiträge/basel-juedisches-museum/basel-juedisches-museum.component';
import { RueegsauReformierteKircheComponent } from './beiträge/rueegsau-reformierte-kirche/rueegsau-reformierte-kirche.component';
import { ErlenbachSanktMichaelskircheComponent } from './beiträge/erlenbach-sankt-michaelskirche/erlenbach-sankt-michaelskirche.component';
import { RivaSanVitaleBaptisteriumComponent } from './beiträge/riva-san-vitale-baptisterium/riva-san-vitale-baptisterium.component';
import { SaintMauriceBaptisteriumComponent } from './beiträge/saint-maurice-baptisterium/saint-maurice-baptisterium.component';
import { KleinhoechstettenKircheComponent } from './beiträge/kleinhoechstetten-kirche/kleinhoechstetten-kirche.component';
import { BernOekumenischeKircheHdrComponent } from './beiträge/bern-oekumenische-kirche-hdr/bern-oekumenische-kirche-hdr.component';
import { PoschiavoFriedhofHildesheimersGrabComponent } from './beiträge/poschiavo-friedhof-hildesheimers-grab/poschiavo-friedhof-hildesheimers-grab.component';
import { DisentisBenediktinerklosterComponent } from './beiträge/disentis-benediktinerkloster/disentis-benediktinerkloster.component';
import { MaennedorfZentrumDerHeiligungsbewegungComponent } from './beiträge/maennedorf-zentrum-der-heiligungsbewegung/maennedorf-zentrum-der-heiligungsbewegung.component';
import { SolothurnSoeursGrisesComponent } from './beiträge/solothurn-soeurs-grises/solothurn-soeurs-grises.component';
import { VispMartinskircheComponent } from './beiträge/visp-martinskirche/visp-martinskirche.component';
import { SolothurnCantusFirmusComponent } from './beiträge/solothurn-cantus-firmus/solothurn-cantus-firmus.component';
import { KirchenthurnenBahaiComponent } from './beiträge/kirchenthurnen-bahai/kirchenthurnen-bahai.component';
import { BaselTotentanzComponent } from './beiträge/basel-totentanz/basel-totentanz.component';
import { WindischDasAmphitheaterVindonissaComponent } from './beiträge/windisch-das-amphitheater-vindonissa/windisch-das-amphitheater-vindonissa.component';
import { OberdorfWallfahrtskircheComponent } from './beiträge/oberdorf-wallfahrtskirche/oberdorf-wallfahrtskirche.component';
import { StMangenWiboradaComponent } from './beiträge/st-mangen-wiborada/st-mangen-wiborada.component';
import { BaselGalluspforteComponent } from './beiträge/basel-galluspforte/basel-galluspforte.component';
import { GlandSaintJeanBaptisteComponent } from './beiträge/gland-saint-jean-baptiste/gland-saint-jean-baptiste.component';
import { MuenchenwilerChristusKircheComponent } from './beiträge/muenchenwiler-christus-kirche/muenchenwiler-christus-kirche.component';
import { TrouvaillenMuenchenwilerchristusundkircheComponent } from './beiträge/trouvaillen-muenchenwilerchristusundkirche/trouvaillen-muenchenwilerchristusundkirche.component';
import { TrouvaillenBeatuslachtComponent } from './beiträge/trouvaillen-beatuslacht/trouvaillen-beatuslacht.component';
import { TrouvaillenUnsererfrauenbruderschaftComponent } from './beiträge/trouvaillen-unsererfrauenbruderschaft/trouvaillen-unsererfrauenbruderschaft.component';
import { OberrohrdorfRaebeliechtliComponent } from './beiträge/oberrohrdorf-raebeliechtli/oberrohrdorf-raebeliechtli.component';
import { TrouvaillenHerrengasse13Component } from './beiträge/trouvaillen-herrengasse13/trouvaillen-herrengasse13.component';
import { TrouvaillenUnsertaeglichbrotComponent } from './beiträge/trouvaillen-unsertaeglichbrot/trouvaillen-unsertaeglichbrot.component';
import { TrouvaillenMattelaendtetorComponent } from './beiträge/trouvaillen-mattelaendtetor/trouvaillen-mattelaendtetor.component';
import { TrouvaillenKircheundstaatComponent } from './beiträge/trouvaillen-kircheundstaat/trouvaillen-kircheundstaat.component';
import { TrouvaillenOeildeboeufComponent } from './beiträge/trouvaillen-oeildeboeuf/trouvaillen-oeildeboeuf.component';
import { TrouvaillenBurgerundstrafgefangeneComponent } from './beiträge/trouvaillen-burgerundstrafgefangene/trouvaillen-burgerundstrafgefangene.component';
import { BaselTrivultusComponent } from './beiträge/basel-trivultus/basel-trivultus.component';

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
    BaselMartinskircheComponent,
    BaselVincentiustafelComponent,
    BelalpKapelleComponent,
    BellelayAbbatialeComponent,
    BernAntoniterkircheComponent,
    BernAntoniterkircheAntoniusFreskenComponent,
    BernTotentanzComponent,
    BetlehemBegegnungenBetlehemComponent,
    BernBurgerspitalComponent,
    BernDuerrenmattMansardeComponent,
    BernHausDerReligionenComponent,
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
    EinsiedelnMadonnaComponent,
    EndingenFriedhofComponent,
    FreiburgZentrumComponent,
    FreiburgCentreDorientComponent,
    GottliebenSchlossComponent,
    HindelbankKircheComponent,
    LuthernbadGnadenbrunnenComponent,
    LuzernSpreuerbrueckeComponent,
    MariasteinKlosterortComponent,
    RueggisbergMartinskircheComponent,
    RuettenenVerenaschluchtComponent,
    ScherzligenKircheComponent,
    SchoenenwerdStiftskircheComponent,
    SimplonHospizComponent,
    SulzigWeitblickComponent,
    LondonChurchComponent,
    ZuerichBlindekuhComponent,
    SolothurnSpitalkircheComponent,
    AletschgletscherArmeSeelenComponent,
    BaselJuedischesMuseumComponent,
    RueegsauReformierteKircheComponent,
    VispMartinskircheComponent,
    ErlenbachSanktMichaelskircheComponent,
    RivaSanVitaleBaptisteriumComponent,
    SaintMauriceBaptisteriumComponent,
    KleinhoechstettenKircheComponent,
    BernOekumenischeKircheHdrComponent,
    PoschiavoFriedhofHildesheimersGrabComponent,
    DisentisBenediktinerklosterComponent,
    MaennedorfZentrumDerHeiligungsbewegungComponent,
    SolothurnSoeursGrisesComponent,
    SolothurnCantusFirmusComponent,
    KirchenthurnenBahaiComponent,
    BaselTotentanzComponent,
    WindischDasAmphitheaterVindonissaComponent,
    OberdorfWallfahrtskircheComponent,
    StMangenWiboradaComponent,
    BaselGalluspforteComponent,
    GlandSaintJeanBaptisteComponent,
    MuenchenwilerChristusKircheComponent,
    TrouvaillenMuenchenwilerchristusundkircheComponent,
    TrouvaillenBeatuslachtComponent,
    TrouvaillenUnsererfrauenbruderschaftComponent,
    OberrohrdorfRaebeliechtliComponent,
    TrouvaillenHerrengasse13Component,
    TrouvaillenUnsertaeglichbrotComponent,
    TrouvaillenMattelaendtetorComponent,
    TrouvaillenKircheundstaatComponent,
    TrouvaillenOeildeboeufComponent,
    TrouvaillenBurgerundstrafgefangeneComponent,
    BaselTrivultusComponent,
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
    BrowserAnimationsModule,
  ],
  providers: [
    ShapeService,
    MarkerService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
