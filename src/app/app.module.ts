import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { OrteComponent } from './home/orte/orte.component';
import { MatButtonModule } from '@angular/material/button';
import { VoyageComponent } from './home/voyage/voyage.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { OrtItemComponent } from './home/orte/ort-item/ort-item.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { AmsoldingenComponent } from './beiträge/amsoldingen/amsoldingen.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IhrbeitragComponent } from './ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './team/team.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    VoyageComponent,
    OrteComponent,
    OrtItemComponent,
    CarouselItemComponent,
    AmsoldingenComponent,
    HomeComponent,
    ContactComponent,
    IhrbeitragComponent,
    TeamComponent,
    MapComponent,
    FooterComponent,
  ],
  imports: [
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
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
