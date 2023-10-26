import { Ciudades } from "@domain/enums/ciudades";

export enum TipoTransporte {
  Terrestre = 'Terrestre',
  Aereo = 'Aereo',
  Maritimo = 'Maritimo',
}
export interface EnvioModel {
  ciudad_origen: Ciudades;
  ciudad_destino: Ciudades;
  recoger_puerta: boolean;
  direccion_origen: string;
  entregar_puerta: boolean;
  direccion_destino: string;
  tipo_transporte: TipoTransporte;
}
