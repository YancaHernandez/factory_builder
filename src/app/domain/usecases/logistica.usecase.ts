import { Injectable } from "@angular/core";
import { LogisticaGateway } from "@domain/gateway/logistica.gateway";
import { EnvioModel } from "@domain/models/envio.model";

@Injectable({
  providedIn: 'root'
})
export class LogisticaUseCase {
  constructor(
    private logisticaGateway: LogisticaGateway
  ) { }

  calcular_costo_total(envio: EnvioModel): number {
    return this.logisticaGateway.calcular_costo_total(envio);
  }
}
