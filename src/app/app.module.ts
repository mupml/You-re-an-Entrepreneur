import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusinessComponent } from './components/business/business.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AffiliateMarketingComponent } from './components/affiliate-marketing/affiliate-marketing.component';
import { ServiceArbitrageComponent } from './components/service-arbitrage/service-arbitrage.component';
import { OnlineCoursesComponent } from './components/online-courses/online-courses.component';
import { BooksComponent } from './components/books/books.component';
import { BillboardsComponent } from './components/billboards/billboards.component';
import { TshirtComponent } from './components/tshirt/tshirt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BusinessComponent,
    ProgrammingComponent,
    ResourcesComponent,
    AboutComponent,
    ContactComponent,
    AffiliateMarketingComponent,
    ServiceArbitrageComponent,
    OnlineCoursesComponent,
    BooksComponent,
    BillboardsComponent,
    TshirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
