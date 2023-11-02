import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './ui/inmobiliaria/inmobiliaria.component';
import { InmobiliariaUseCase } from './domain/usecases/inmobiliaria.usecase';
import { InmobiliariaGateway } from './domain/gateways/inmobiliaria.gateway';
import { InmobiliariaService } from './infrastructure/inmobiliaria/inmobiliaria.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InmobiliariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    InmobiliariaUseCase,
    {
      provide: InmobiliariaGateway,
      useClass: InmobiliariaService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
