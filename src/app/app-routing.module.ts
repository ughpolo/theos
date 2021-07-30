import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmsoldingenComponent } from './beiträge/amsoldingen/amsoldingen.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OrteComponent } from './home/orte/orte.component';
import { IhrbeitragComponent } from './ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './team/team.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reisehinweise', component: OrteComponent },
  { path: 'amsoldingen', component: AmsoldingenComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'beitrag', component: IhrbeitragComponent },
  { path: 'team', component: TeamComponent },
  { path: 'map', component: MapComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
