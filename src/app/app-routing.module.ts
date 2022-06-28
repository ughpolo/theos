import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { AmsoldingenKircheComponent } from './beiträge/amsoldingen-kirche/amsoldingen-kirche.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { OrteComponent } from './components/home/orte/orte.component';
import { IhrbeitragComponent } from './components/ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './components/team/team.component';
import { MapComponent } from './components/map/map.component';
import { ReisehinweiseComponent } from './components/reisehinweise/reisehinweise.component';
import { AboutComponent } from './components/about/about.component';
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
const routes: Routes = [
  {
    path: 'wallfahrtskirche-mariä-himmelfahrt',
    component: OberdorfWallfahrtskircheComponent,
  },
  {
    path: 'das-amphitheater-vindonissa',
    component: WindischDasAmphitheaterVindonissaComponent,
  },
  {
    path: 'totentanz',
    component: BaselTotentanzComponent,
  },
  {
    path: 'tempelland-der-schweizer-bahai-gemeinde',
    component: KirchenthurnenBahaiComponent,
  },
  {
    path: 'kunstprojekt-cantus-firmus',
    component: SolothurnCantusFirmusComponent,
  },
  {
    path: 'die-soeurs-grises-von-solothurn',
    component: SolothurnSoeursGrisesComponent,
  },
  {
    path: 'etudes-des-eglises-dorient',
    component: FreiburgCentreDorientComponent,
  },
  {
    path: 'zentrum-der-heiligungsbewegung',
    component: MaennedorfZentrumDerHeiligungsbewegungComponent,
  },
  {
    path: 'benediktinerkloster',
    component: DisentisBenediktinerklosterComponent,
  },
  {
    path: 'friedhof-hildesheimers-grab',
    component: PoschiavoFriedhofHildesheimersGrabComponent,
  },
  {
    path: 'ökumenische-kirche-im-haus-der-religionen',
    component: BernOekumenischeKircheHdrComponent,
  },
  {
    path: 'die-evangelisch-reformierte-kirche',
    component: KleinhoechstettenKircheComponent,
  },
  {
    path: 'saint-maurice-baptisterium',
    component: SaintMauriceBaptisteriumComponent,
  },
  {
    path: 'san-vitale-baptisterium',
    component: RivaSanVitaleBaptisteriumComponent,
  },
  {
    path: 'sankt-michaelskirche',
    component: ErlenbachSanktMichaelskircheComponent,
  },
  { path: 'st.-martinskirche-visp', component: VispMartinskircheComponent },
  { path: 'reformierte-kirche', component: RueegsauReformierteKircheComponent },
  { path: 'jüdisches-museum', component: BaselJuedischesMuseumComponent },
  { path: 'gletschersage', component: AletschgletscherArmeSeelenComponent },
  { path: 'spitalkirche', component: SolothurnSpitalkircheComponent },
  { path: 'restaurant-blinde-kuh', component: ZuerichBlindekuhComponent },
  { path: 'swiss-church-in-london', component: LondonChurchComponent },
  { path: 'weitblick-und-enge', component: SulzigWeitblickComponent },
  { path: 'simplon-hospiz', component: SimplonHospizComponent },
  {
    path: 'stiftskirche-st.-leodegar',
    component: SchoenenwerdStiftskircheComponent,
  },
  { path: 'scherzligen-kirche', component: ScherzligenKircheComponent },
  { path: 'verenaschlucht', component: RuettenenVerenaschluchtComponent },
  {
    path: 'martinskirche-rüeggisberg',
    component: RueggisbergMartinskircheComponent,
  },
  { path: 'klosterort', component: MariasteinKlosterortComponent },

  { path: 'spreuerbrücke', component: LuzernSpreuerbrueckeComponent },
  { path: 'gnadenbrunnen', component: LuthernbadGnadenbrunnenComponent },
  { path: 'hindelbank-kirche', component: HindelbankKircheComponent },
  { path: 'schloss-gottlieben', component: GottliebenSchlossComponent },
  {
    path: 'freiburg-centre-dorient',
    component: FreiburgCentreDorientComponent,
  },
  { path: 'studium-der-ostkirchen', component: FreiburgZentrumComponent },
  { path: 'synagogen-und-friedhof', component: EndingenFriedhofComponent },
  { path: 'schwarze-madonna', component: EinsiedelnMadonnaComponent },
  { path: 'feder', component: BuerenFederComponent },
  { path: 'kollegiumskirche', component: BrigKollegiumskircheComponent },
  {
    path: 'ökumenisches-institut',
    component: BosseyOekumenischesInstitutComponent,
  },
  {
    path: 'kraftwerk-birsfelden',
    component: BaselKraftwerkBirsfeldenComponent,
  },
  { path: 'filmpodium', component: BielFilmpodiumComponent },
  { path: 'zentrum-paul-klee', component: BernPaulKleeComponent },
  {
    path: 'stationenweg-zur-täufergeschichte',
    component: BernTaeufergeschichteComponent,
  },
  { path: 'münster-st.-vinzenz', component: BernVinzenzComponent },
  {
    path: 'hebammenpforte-des-berner-münsters',
    component: BernHebammenpforteComponent,
  },
  { path: 'münster-portal', component: BernMuensterPortalComponent },
  {
    path: 'kindlifresserbrunnen',
    component: BernKindlifresserbrunnenComponent,
  },
  { path: 'haus-der-religionen', component: BernHausDerReligionenComponent },
  { path: 'dürrenmatts-mansarde', component: BernDuerrenmattMansardeComponent },
  { path: 'ehemaliges-burgerspital', component: BernBurgerspitalComponent },
  { path: 'berner-totentanz', component: BernTotentanzComponent },
  {
    path: 'begegnungen-in-bethlehem',
    component: BetlehemBegegnungenBetlehemComponent,
  },
  { path: 'berner-totentanz', component: BernTotentanzComponent },
  {
    path: 'antoniterkirche-antonius-fresken',
    component: BernAntoniterkircheAntoniusFreskenComponent,
  },
  { path: 'antoniterkirche', component: BernAntoniterkircheComponent },
  { path: 'abbatiale', component: BellelayAbbatialeComponent },
  { path: 'kapelle', component: BelalpKapelleComponent },
  { path: 'vincentiustafel', component: BaselVincentiustafelComponent },
  { path: 'kirche-st.martin', component: BaselMartinskircheComponent },
  {
    path: 'cigognier-heiligtum',
    component: AvenchesCigognierHeiligtumComponent,
  },
  { path: 'solothurn-zwei-heilige', component: SolothurnZweiHeiligeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'reisehinweise',
    component: ReisehinweiseComponent,
    children: [
      { path: 'kacheln', component: OrteComponent },
      { path: 'map', component: MapComponent },
    ],
  },
  { path: 'baptisterium', component: BaptisteriumComponent },
  { path: 'amsoldingen-kirche', component: AmsoldingenKircheComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'beitrag', component: IhrbeitragComponent },
  { path: 'map', component: MapComponent },
  // { path: 'team', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
