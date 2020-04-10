import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusinessComponent } from './components/business/business.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResourcesComponent } from './components/resources/resources.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'business', component: BusinessComponent},
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
