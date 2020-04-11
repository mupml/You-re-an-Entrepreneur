import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { AffiliateMarketingComponent } from './components/affiliate-marketing/affiliate-marketing.component';
import { ServiceArbitrageComponent } from './components/service-arbitrage/service-arbitrage.component';
import { OnlineCoursesComponent } from './components/online-courses/online-courses.component';
import { BooksComponent } from './components/books/books.component';
import { BillboardsComponent } from './components/billboards/billboards.component';
import { TshirtComponent } from './components/tshirt/tshirt.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'blog/business', component: BusinessComponent},
  {path: 'blog/business/affiliate-marketing', component: AffiliateMarketingComponent},
  {path: 'blog/business/service-arbitrage', component: ServiceArbitrageComponent},
  {path: 'blog/business/online-courses', component: OnlineCoursesComponent},
  {path: 'blog/business/books-ebooks', component: BooksComponent},
  {path: 'blog/business/digital-billboards', component: BillboardsComponent},
  {path: 'blog/business/t-shirt-printing', component: TshirtComponent},
  {path: 'programming', component: ProgrammingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resources', component: ResourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
