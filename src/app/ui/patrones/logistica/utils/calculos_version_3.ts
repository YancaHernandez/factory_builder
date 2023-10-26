import { Ciudades } from "@domain/entities/ciudades";
import { Camion3 } from "@infra/problemas/transporte/Caminon_version_3";
import { FactoryTransporte } from "./factory_transporte";

export class CalculosPatron3 {

  calcular_costo_envio(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean,
    direccion_origen: string,
    entregar_puerta: boolean,
    direccion_destino: string,
    tipo_transporte: 'Terrestre' | 'Aereo' | 'Maritimo'
  ) {
    const transporte = FactoryTransporte.factory(
      ciudad_origen,
      ciudad_destino,
      recoger_puerta,
      direccion_origen,
      entregar_puerta,
      direccion_destino,
      tipo_transporte
    );

    return transporte.calcular_cosoto_total()
  }

}
