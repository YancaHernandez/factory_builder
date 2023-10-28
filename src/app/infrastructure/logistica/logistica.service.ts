import { Injectable } from '@angular/core';
import { LogisticaGateway } from '@domain/gateway/logistica.gateway';
import { EnvioModel } from '@domain/models/envio.model';
import { LogisticaFactory } from './factory/logistica_factory';

@Injectable({
  providedIn: 'root'
})
export class LogisticaService implements LogisticaGateway {
  //Calcular costo total
  calcular_costo_total(envio: EnvioModel): number {
    const logistica = LogisticaFactory.createLogistica(envio);
    return logistica.calcular_costo_total();
  }

}
