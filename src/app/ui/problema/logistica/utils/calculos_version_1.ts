import { Ciudades } from "@domain/entities/ciudades";
import { Camion } from "@infra/problemas/transporte/Caminon_version_1";

export class Calculos {
  calcular_costo_envio(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean,
    direccion_origen: string,
    entregar_puerta: boolean,
    direccion_destino: string,
  ) {

    const transporte = new Camion();
    return transporte.calcular_cosoto_total(
      ciudad_origen,
      ciudad_destino,
      recoger_puerta,
      direccion_origen,
      entregar_puerta,
      direccion_destino,
    );
  }

}
