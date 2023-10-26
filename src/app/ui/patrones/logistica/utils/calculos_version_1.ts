import { Ciudades } from "@domain/entities/ciudades";
import { Logistica_Carretera } from "@infra/patrones/transporte/Logistica_Carretera";
import { FactoryTransporte } from "./factory_transporte";

export class CalculosPatron {
  calcular_costo_envio(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean,
    direccion_origen: string,
    entregar_puerta: boolean,
    direccion_destino: string,
  ) {
    const transporte = FactoryTransporte.factory(
      ciudad_origen,
      ciudad_destino,
      recoger_puerta,
      direccion_origen,
      entregar_puerta,
      direccion_destino,
      'Terrestre'
    );
    return transporte.calcular_cosoto_total();
  }

}
