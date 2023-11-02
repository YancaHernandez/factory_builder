import { Injectable } from "@angular/core";
import { InmobiliariaGateway } from "../gateways/inmobiliaria.gateway";
import { ViviendaModel } from "../models/vivienda.model";

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaUseCase {
  constructor(
    private inmobiliariaGateway: InmobiliariaGateway
  ) { }

  calcular_costo_vivienda(vivienda: ViviendaModel): number {
    return this.inmobiliariaGateway.calcular_costo_vivienda(vivienda);
  }
}
