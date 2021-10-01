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
<<<<<<< HEAD
import { BaptisteriumComponent } from './beiträge/baptisterium/baptisterium.component';
=======
import { SolothurnZweiHeiligeComponent } from './beiträge/solothurn-zwei-heilige/solothurn-zwei-heilige.component';
>>>>>>> d625d8b5288c1517a609ceaffd6b4f4cd1804336


const routes: Routes = [
  { path: 'solothurn-zwei-heilige', component: SolothurnZweiHeiligeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'reisehinweise', component: ReisehinweiseComponent, children: [
      { path: 'kacheln', component: OrteComponent },
      { path: 'map', component: MapComponent }
    ]
  },
<<<<<<< HEAD
  { path: 'amsoldingen', component: AmsoldingenComponent },
  { path: 'baptisterium', component: BaptisteriumComponent },
=======
  { path: 'amsoldingen-kirche', component: AmsoldingenKircheComponent },
>>>>>>> d625d8b5288c1517a609ceaffd6b4f4cd1804336
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
