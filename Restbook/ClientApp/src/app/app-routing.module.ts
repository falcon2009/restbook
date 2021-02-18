import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RestoranComponent } from './component/restoran/restoran.component';
import { LocationListComponent } from './component/restoran/location/location.list/location.list.component';
import { SchemeComponent } from './component/restoran/scheme/scheme/scheme.component';
import { MenuComponent } from './component/restoran/menu/menu/menu.component';

const restoranRouteList: Routes = [
  { path: '', component: LocationListComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'menu', component: MenuComponent }
]

const routeList: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'company', 
    component: RestoranComponent,
    children: restoranRouteList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routeList)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
