import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { OrteComponent } from './orte/orte.component';
import { MatButtonModule } from '@angular/material/button';
import { VoyageComponent } from './voyage/voyage.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { OrtItemComponent } from './orte/ort-item/ort-item.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    VoyageComponent,
    OrteComponent,
    OrtItemComponent,
    CarouselItemComponent
  ],
  imports: [
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
