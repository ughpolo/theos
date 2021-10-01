import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmsoldingenKircheComponent } from './beiträge/amsoldingen-kirche/amsoldingen-kirche.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OrteComponent } from './home/orte/orte.component';
import { IhrbeitragComponent } from './ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './team/team.component';
import { MapComponent } from './map/map.component';
import { ReisehinweiseComponent } from './reisehinweise/reisehinweise.component';
import { AboutComponent } from './about/about.component';
import { SolothurnZweiHeiligeComponent } from './beiträge/solothurn-zwei-heilige/solothurn-zwei-heilige.component';


const routes: Routes = [
  { path: 'solothurn-zwei-heilige', component: SolothurnZweiHeiligeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'reisehinweise', component: ReisehinweiseComponent, children: [
      { path: 'kacheln', component: OrteComponent },
      { path: 'map', component: MapComponent }
    ]
  },
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
