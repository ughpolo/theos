import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { OrteComponent } from './home/orte/orte.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatButtonModule } from '@angular/material/button';
import { VoyageComponent } from './home/voyage/voyage.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { OrtItemComponent } from './home/orte/ort-item/ort-item.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { AmsoldingenKircheComponent } from './beiträge/amsoldingen-kirche/amsoldingen-kirche.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IhrbeitragComponent } from './ihrbeitrag/ihrbeitrag.component';
import { TeamComponent } from './team/team.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { ReisehinweiseComponent } from './reisehinweise/reisehinweise.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { ShapeService } from './shape.service';
import { RemoveshitespacesPipe } from './custompipe/removeshitespaces.pipe';
import { AboutComponent } from './about/about.component';
import { TitleImageComponent } from './title-image/title-image.component';
import { BaptisteriumComponent } from './beiträge/baptisterium/baptisterium.component';


import { SolothurnZweiHeiligeComponent } from './beiträge/solothurn-zwei-heilige/solothurn-zwei-heilige.component';
import { SolothurnComponent } from './beiträge/solothurn/solothurn.component';
import { AvenchesCigognierHeiligtumComponent } from './beiträge/avenches-cigognier-heiligtum/avenches-cigognier-heiligtum.component';
import { SchweizMartinskircheComponent } from './beiträge/schweiz-martinskirche/schweiz-martinskirche.component';







@NgModule({
  declarations: [
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
    SolothurnComponent,
    AvenchesCigognierHeiligtumComponent,
    SchweizMartinskircheComponent,

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
    ShapeService,
    MarkerService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
