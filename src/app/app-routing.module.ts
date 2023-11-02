import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmobiliariaComponent } from './ui/inmobiliaria/inmobiliaria.component';

const routes: Routes = [
  {
    path: 'inmobiliaria',
    component: InmobiliariaComponent,
  },
  {
    path: '**',
    redirectTo: 'inmobiliaria',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
