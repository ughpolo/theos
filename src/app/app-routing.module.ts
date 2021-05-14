import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmsoldingenComponent } from './beiträge/amsoldingen/amsoldingen.component';
import { HomeComponent } from './home/home.component';
import { OrteComponent } from './home/orte/orte.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'orte', component: OrteComponent},
  {path: 'amsoldingen', component: AmsoldingenComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
