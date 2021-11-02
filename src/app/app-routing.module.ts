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


const routes: Routes = [
  { path: 'restaurant-blinde-kuh', component: ZhBlindekuhComponent },
  { path: 'swiss-church-in-london', component: LondonChurchComponent },
  { path: 'weitblick-und-enge', component: SulzigWeitblickComponent },
  { path: 'simplon-hospiz', component: SimplonHospizComponent },
  { path: 'stiftskirche-st.-leodegar', component: SchoenewerdStiftskircheComponent },
  { path: 'scherzlingen-kirche', component: ScherzlingenKircheComponent },
  { path: 'verenaschlucht', component: SoVerenaschluchtComponent },
  { path: 'martinskirche-rüeggisberg', component: RueggisbergMartinskircheComponent },
  { path: 'klosterort', component: SoKlosterortComponent },
  { path: 'zentrum-der-heiligungsbewegung', component: ZhHeiligungsbewegungComponent },
  { path: 'spreuerbrücke', component: LuzernSpreuerbrueckeComponent },
  { path: 'gnadenbrunnen', component: LuthernbadGnadenbrunnenComponent },
  { path: 'hindelbank-kirche', component: HindelbankKircheComponent },
  { path: 'schloss-gottlieben', component: GottliebenSchlossComponent },
  { path: 'centre-dorient', component: CentreDorientComponent },
  { path: 'studium-der-ostkirchen', component: FreiburgZentrumComponent },
  { path: 'synagogen-und-friedhof', component: EndingenFriedhofComponent },
  { path: 'schwarze-madonna', component: EinsiedelnMadonnaComponent },
  { path: 'benediktinerkloster', component: GraubuendenBenediktinerklosterComponent },
  { path: 'feder', component: BuerenFederComponent },
  { path: 'kollegiumskirche', component: BrigKollegiumskircheComponent },
  { path: 'ökumenisches-institut', component: BosseyOekumenischesInstitutComponent },
  { path: 'kraftwerk-birsfelden', component: BaselKraftwerkBirsfeldenComponent },
  { path: 'filmpodium', component: BielFilmpodiumComponent },
  { path: 'zentrum-paul-klee', component: BernPaulKleeComponent },
  { path: 'stationenweg-zur-täufergeschichte', component: BernTaeufergeschichteComponent },
  { path: 'münster-st.-vinzenz', component: BernVinzenzComponent },
  { path: 'hebammenpforte-des-berner-münsters', component: BernHebammenpforteComponent },
  { path: 'münster-portal', component: BernMuensterPortalComponent },
  { path: 'kindlifresserbrunnen', component: BernKindlifresserbrunnenComponent },
  { path: 'haus-der-religionen', component: HausDerReligionenComponent },
  { path: 'dürrenmatts-mansarde', component: BernDuerrenmattMansardeComponent },
  { path: 'ehemaliges-bürgerspital', component: BernBurgerspitalComponent },
  { path: 'berner-totentanz', component: BernTotentanzComponent },
  { path: 'begegnungen-in-bethlehem', component: BetlehemBegegnungenBetlehemComponent },
  { path: 'berner-totentanz', component: BernTotentanzComponent },
  { path: 'antoniterkirche-antonius-fresken', component: BernAntoniterkircheAntoniusFreskenComponent },
  { path: 'antoniterkirche', component: BernAntoniterkircheComponent },
  { path: 'labbatiale', component: BellelayAbbatialeComponent },
  { path: 'kapelle', component: BelalpKapelleComponent },
  { path: 'vincentiustafel', component: BaselVincentiustafelComponent },
  { path: 'kirche-st.martin', component: SchweizMartinskircheComponent },
  { path: 'cigognier-heiligtum', component: AvenchesCigognierHeiligtumComponent },
  { path: 'solothurn-zwei-heilige', component: SolothurnZweiHeiligeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'reisehinweise', component: ReisehinweiseComponent, children: [
      { path: 'kacheln', component: OrteComponent },
      { path: 'map', component: MapComponent }
    ]
  },
  { path: 'baptisterium', component: BaptisteriumComponent },
  { path: 'amsoldingen-kirche', component: AmsoldingenKircheComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'beitrag', component: IhrbeitragComponent },
  { path: 'map', component: MapComponent },
  { path: 'team', component: AboutComponent },
  { path: 'test', component: TeamComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
