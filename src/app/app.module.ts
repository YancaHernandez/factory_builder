import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LogisticaGateway } from '@domain/gateway/logistica.gateway';
import { LogisticaService } from '@infra/logistica/logistica.service';
import { LogisticaUseCase } from '@domain/usecases/logistica.usecase';
import { LogisticaComponent } from '@ui/logistica/logistica.component';

@NgModule({
  declarations: [
    AppComponent,
    LogisticaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LogisticaUseCase,
    {
      provide: LogisticaGateway,
      useClass: LogisticaService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
