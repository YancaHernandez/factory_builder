import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticaComponent } from '@ui/logistica/logistica.component';

const routes: Routes = [
  {
    path: 'logistica',
    component: LogisticaComponent,
  },
  {
    path: '**',
    redirectTo: 'logistica',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
