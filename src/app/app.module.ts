import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LogisticaComponent } from '@ui/problema/logistica/logistica.component';
import { LogisticaVersion1Component } from '@ui/problema/logistica/componentes/logistica_version_1/logistica_version_1.component';
import { LogisticaVersion2Component } from '@ui/problema/logistica/componentes/logistica_version_2/logistica_version_2.component';
import { LogisticaVersion3Component } from '@ui/problema/logistica/componentes/logistica_version_3/logistica_version_3.component';
import { LogisticaPatronComponent } from '@ui/patrones/logistica/logisticaPatron.component';
import { LogisticaPatronVersion1Component } from '@ui/patrones/logistica/componentes/logistica_version_1/logistica_patron_version_1.component';
import { LogisticaPatronVersion2Component } from '@ui/patrones/logistica/componentes/logistica_version_2/logistica_patron_version_2.component';
import { LogisticaPatronVersion3Component } from '@ui/patrones/logistica/componentes/logistica_version_3/logistica_patron_version_3.component';

@NgModule({
  declarations: [
    AppComponent,
    LogisticaComponent,
    LogisticaVersion1Component,
    LogisticaVersion2Component,
    LogisticaVersion3Component,

    LogisticaPatronComponent,
    LogisticaPatronVersion1Component,
    LogisticaPatronVersion2Component,
    LogisticaPatronVersion3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
