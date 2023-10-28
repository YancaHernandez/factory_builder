import { Injectable } from '@angular/core';
import { LogisticaGateway } from '@domain/gateway/logistica.gateway';
import { EnvioModel } from '@domain/models/envio.model';
import { Logistica_Carretera } from './factory/logistica_carretera';

@Injectable({
  providedIn: 'root'
})
export class LogisticaService implements LogisticaGateway {
  //Calcular costo total
  calcular_costo_total(envio: EnvioModel): number {
    const logistica = new Logistica_Carretera(envio)
    return logistica.calcular_costo_total();
  }

}
