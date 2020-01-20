import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { MaterialModule } from "./material.module";
import { ContentService } from './shared/services/content.service';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FirstComponent } from './menuPages/first/first.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    FullpageDirective,
    FooterComponent,
    AboutComponent,
    SidebarComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ContentService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, FirstComponent]
})
export class AppModule { }
