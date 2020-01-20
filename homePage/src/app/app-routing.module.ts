import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [
//   {path: '', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'home', component: PageComponent, data: {
//     page: 'home'
//   }},
//   {path: 'about', component: PageComponent, data: {
//     page: 'about'
//   }},
//   {path: 'contact', component: PageComponent, data: {
//     page: 'contact'
//   }},
//   {path: '**', redirectTo: '/home', pathMatch: 'full'}
// ];

const routes: Routes = [
  { path: 'about',  component: AboutComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'contact',  component: ContactComponent},
  { path: '', redirectTo: '/#', pathMatch: 'full'},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
