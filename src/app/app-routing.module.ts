import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticaPatronComponent } from '@ui/patrones/logistica/logisticaPatron.component';
import { LogisticaComponent } from '@ui/problema/logistica/logistica.component';

const routes: Routes = [
  {
    path: '',
    component: LogisticaComponent,
  },
  {
    path: 'patron',
    component: LogisticaPatronComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
