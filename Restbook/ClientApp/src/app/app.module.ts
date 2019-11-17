import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ConfigService } from './service/config.service';
import { CompanyService } from './service/company.service';
import { RestoranComponent } from './component/restoran/restoran.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestoranComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ConfigService, CompanyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
