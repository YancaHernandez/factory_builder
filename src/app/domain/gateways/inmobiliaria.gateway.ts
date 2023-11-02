import { ViviendaModel } from "../models/vivienda.model";

export abstract class InmobiliariaGateway {
  abstract calcular_costo_vivienda(vivienda: ViviendaModel): number
}
