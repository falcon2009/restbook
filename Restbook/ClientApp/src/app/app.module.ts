import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { HomeComponent } from './component/home/home.component';
import { RestoranComponent } from './component/restoran/restoran.component';
import { RestoranLeftMenuComponent } from './component/restoran/restoran.leftmenu/restoran.leftmenu.component';
import { LocationListComponent } from './component/restoran/location/location.list/location.list.component';
import { LocationDetailsComponent } from './component/restoran/location/location.details/location.details.component';
import { MenuComponent } from './component/restoran/menu/menu/menu.component';
import { SchemeComponent } from './component/restoran/scheme/scheme/scheme.component';

import { ConfigService } from './shared/service/config.service';
import { CompanyService } from './service/company.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestoranComponent,
    RestoranLeftMenuComponent,
    LocationListComponent,
    LocationDetailsComponent,
    MenuComponent,
    SchemeComponent,
    ToolbarComponent
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
