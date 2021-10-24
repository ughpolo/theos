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


const routes: Routes = [
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
