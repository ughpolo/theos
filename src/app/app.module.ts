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
//import { StickyNavModule } from 'ng2-sticky-nav';
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
import { TrouvaillenBuchhofComponent } from './beiträge/trouvaillen-buchhof/trouvaillen-buchhof.component';
import { TrouvaillenBernersynodusComponent } from './beiträge/trouvaillen-bernersynodus/trouvaillen-bernersynodus.component';
import { TrouvaillenHindelbankComponent } from './beiträge/trouvaillen-hindelbank/trouvaillen-hindelbank.component';
import { BaselClarakircheComponent } from './beiträge/basel-clarakirche/basel-clarakirche.component';
import { TrouvaillenMontmirailComponent } from './beiträge/trouvaillen-montmirail/trouvaillen-montmirail.component';
import { TrouvaillenDiakonissenhausComponent } from './beiträge/trouvaillen-diakonissenhaus/trouvaillen-diakonissenhaus.component';
import { TrouvaillenDaerstettenComponent } from './beiträge/trouvaillen-daerstetten/trouvaillen-daerstetten.component';
import { TrouvaillenLandibernComponent } from './beiträge/trouvaillen-landibern/trouvaillen-landibern.component';
import { TrouvaillenCelluleComponent } from './beiträge/trouvaillen-cellule/trouvaillen-cellule.component';
import { TrouvaillenLandizhComponent } from './beiträge/trouvaillen-landizh/trouvaillen-landizh.component';
import { UndervelierQuellgrotteComponent } from './beiträge/undervelier-quellgrotte/undervelier-quellgrotte.component';
import { GesteigwilerWandmalereienundheiligkeitComponent } from './beiträge/gesteigwiler-wandmalereienundheiligkeit/gesteigwiler-wandmalereienundheiligkeit.component';
import { TrouvaillenAlleeinsComponent } from './beiträge/trouvaillen-alleeins/trouvaillen-alleeins.component';

import { TrouvaillenHeidelundherrlibergerComponent } from './beiträge/trouvaillen-heidelundherrliberger/trouvaillen-heidelundherrliberger.component';
import { TrouvaillenInspeetsilentioComponent } from './beiträge/trouvaillen-inspeetsilentio/trouvaillen-inspeetsilentio.component';
import { BaselErasmusComponent } from './beiträge/basel-erasmus/basel-erasmus.component';
import { LuetzelflueGotthelfComponent } from './beiträge/luetzelflue-gotthelf/luetzelflue-gotthelf.component';
import { BaselLindenbergComponent } from './beiträge/basel-lindenberg/basel-lindenberg.component';
import { VatikanSchweizergardeComponent } from './beiträge/vatikan-schweizergarde/vatikan-schweizergarde.component';
import { BaselErasmusvonrotterdamComponent } from './beiträge/basel-erasmusvonrotterdam/basel-erasmusvonrotterdam.component';
import { StGallenEinmauernComponent } from './beiträge/st-gallen-einmauern/st-gallen-einmauern.component';
import { BaselMarienkircheComponent } from './beiträge/basel-marienkirche/basel-marienkirche.component';
import { PrugiascoSantambrogioComponent } from './beiträge/prugiasco-santambrogio/prugiasco-santambrogio.component';
import { NiederamtSakrallandschaftComponent } from './beiträge/niederamt-sakrallandschaft/niederamt-sakrallandschaft.component';
import { AlpthalApolloniaComponent } from './beiträge/alpthal-apollonia/alpthal-apollonia.component';
import { BaselWaschhausComponent } from './beiträge/basel-waschhaus/basel-waschhaus.component';
import { BernMuristaldenComponent } from './beiträge/bern-muristalden/bern-muristalden.component';
import { OberwilHansarpComponent } from './beiträge/oberwil-hansarp/oberwil-hansarp.component';
import { StgallenNotkerglobusComponent } from './beiträge/stgallen-notkerglobus/stgallen-notkerglobus.component';
import { BernGerechtigkeitsbrunnenComponent } from './beiträge/bern-gerechtigkeitsbrunnen/bern-gerechtigkeitsbrunnen.component';
import { JerusalemBubenbergComponent } from './beiträge/jerusalem-bubenberg/jerusalem-bubenberg.component';
import { TaenikonKlostertaenikonComponent } from './beiträge/taenikon-klostertaenikon/taenikon-klostertaenikon.component';
import { GlarusSimultaneumComponent } from './beiträge/glarus-simultaneum/glarus-simultaneum.component';
import { BaselHistmuseumComponent } from './beiträge/basel-histmuseum/basel-histmuseum.component';
import { InterlakenJungfrauComponent } from './beiträge/interlaken-jungfrau/interlaken-jungfrau.component';
import { WaltensburgPassionComponent } from './beiträge/waltensburg-passion/waltensburg-passion.component';
import { ZuerichBrunngasseComponent } from './beiträge/zuerich-brunngasse/zuerich-brunngasse.component';
import { ZuerichHerzjesuwiedikonComponent } from './beiträge/zuerich-herzjesuwiedikon/zuerich-herzjesuwiedikon.component';
import { LeukerbadGemmipassComponent } from './beiträge/leukerbad-gemmipass/leukerbad-gemmipass.component';
import { RuescheggSchwarzwasserComponent } from './beiträge/rueschegg-schwarzwasser/rueschegg-schwarzwasser.component';
import { BielWartesaalComponent } from './beiträge/biel-wartesaal/biel-wartesaal.component';
import { BaselBruderholzalleeComponent } from './beiträge/basel-bruderholzallee/basel-bruderholzallee.component';
import { NeuenburgCdnComponent } from './beiträge/neuenburg-cdn/neuenburg-cdn.component';
import { PleifTaldeslichtsComponent } from './beiträge/pleif-taldeslichts/pleif-taldeslichts.component';
import { WassenChileliComponent } from './beiträge/wassen-chileli/wassen-chileli.component';
import { CasacciaKircheComponent } from './beiträge/casaccia-kirche/casaccia-kirche.component';
import { FinsteraarhornGipfelkreuzComponent } from './beiträge/finsteraarhorn-gipfelkreuz/finsteraarhorn-gipfelkreuz.component';
import { ZuerichRietbergComponent } from './beiträge/zuerich-rietberg/zuerich-rietberg.component';
import { SafenwilBarthComponent } from './beiträge/safenwil-barth/safenwil-barth.component';
import { BernDreifaltigkeitComponent } from './beiträge/bern-dreifaltigkeit/bern-dreifaltigkeit.component';
import { MonteVeritaWahrheitswegeComponent } from './beiträge/monte-verita-wahrheitswege/monte-verita-wahrheitswege.component';
import { BernBrachedock8Component } from './beiträge/bern-brachedock8/bern-brachedock8.component';
import { CazisFrauenstiftComponent } from './beiträge/cazis-frauenstift/cazis-frauenstift.component';
import { ArthMoravginComponent } from './beiträge/arth-moravgin/arth-moravgin.component';
import { DavosMarienkirchedavosComponent } from './beiträge/davos-marienkirchedavos/davos-marienkirchedavos.component';
import { BernFranzoesischekirchebernComponent } from './beiträge/bern-franzoesischekirchebern/bern-franzoesischekirchebern.component';
import { OberwilPfarrhausoberwilComponent } from './beiträge/oberwil-pfarrhausoberwil/oberwil-pfarrhausoberwil.component';
import { WohlenbeibernMuengerfensterComponent } from './beiträge/wohlenbeibern-muengerfenster/wohlenbeibern-muengerfenster.component';

@NgModule({
  declarations: [
    WohlenbeibernMuengerfensterComponent,
    OberwilPfarrhausoberwilComponent,
    BernFranzoesischekirchebernComponent,
    DavosMarienkirchedavosComponent,
    ArthMoravginComponent,
    CazisFrauenstiftComponent,
    BernBrachedock8Component,
    MonteVeritaWahrheitswegeComponent,
    BernDreifaltigkeitComponent,
    SafenwilBarthComponent,
    ZuerichRietbergComponent,
    FinsteraarhornGipfelkreuzComponent,
    CasacciaKircheComponent,
    WassenChileliComponent,
    PleifTaldeslichtsComponent,
    NeuenburgCdnComponent,
    BaselBruderholzalleeComponent,
    BielWartesaalComponent,
    RuescheggSchwarzwasserComponent,
    LeukerbadGemmipassComponent,

    ZuerichHerzjesuwiedikonComponent,
    ZuerichBrunngasseComponent,
    WaltensburgPassionComponent,
    InterlakenJungfrauComponent,
    BaselHistmuseumComponent,
    GlarusSimultaneumComponent,
    TaenikonKlostertaenikonComponent,
    JerusalemBubenbergComponent,
    BernGerechtigkeitsbrunnenComponent,
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
    TrouvaillenBuchhofComponent,
    TrouvaillenBernersynodusComponent,
    TrouvaillenHindelbankComponent,
    BaselClarakircheComponent,
    TrouvaillenMontmirailComponent,
    TrouvaillenDiakonissenhausComponent,
    TrouvaillenDaerstettenComponent,
    TrouvaillenLandibernComponent,
    TrouvaillenCelluleComponent,
    TrouvaillenLandizhComponent,
    UndervelierQuellgrotteComponent,
    GesteigwilerWandmalereienundheiligkeitComponent,
    TrouvaillenAlleeinsComponent,

    TrouvaillenHeidelundherrlibergerComponent,

    TrouvaillenInspeetsilentioComponent,

    BaselErasmusComponent,

    LuetzelflueGotthelfComponent,

    BaselLindenbergComponent,

    VatikanSchweizergardeComponent,

    BaselErasmusvonrotterdamComponent,

    StGallenEinmauernComponent,

    BaselMarienkircheComponent,

    PrugiascoSantambrogioComponent,

    NiederamtSakrallandschaftComponent,

    AlpthalApolloniaComponent,

    BaselWaschhausComponent,

    BernMuristaldenComponent,

    OberwilHansarpComponent,

    StgallenNotkerglobusComponent,
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
    //StickyNavModule,
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
