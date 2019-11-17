import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RestoranComponent } from './component/restoran/restoran.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restoran/:id', component: RestoranComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
