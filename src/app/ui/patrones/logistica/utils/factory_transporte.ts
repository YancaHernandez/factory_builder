import { Ciudades } from "@domain/entities/ciudades";
import { Logistica_Aerea } from "@infra/patrones/transporte/Logistica_Aerea";
import { Logistica_Carretera } from "@infra/patrones/transporte/Logistica_Carretera";
import { Logistica_Maritima } from "@infra/patrones/transporte/Logistica_Maritima";
import { Logistica_Transporte } from "@infra/patrones/transporte/Logistica_Transporte";

export class FactoryTransporte {
  static factory(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean,
    direccion_origen: string,
    entregar_puerta: boolean,
    direccion_destino: string,
    tipo_transporte: 'Terrestre' | 'Aereo' | 'Maritimo',
  ): Logistica_Transporte {
    switch (tipo_transporte) {
      case 'Terrestre':
        return new Logistica_Carretera(
          ciudad_origen,
          ciudad_destino,
          recoger_puerta,
          direccion_origen,
          entregar_puerta,
          direccion_destino,
        );

      case 'Aereo':
        return new Logistica_Aerea(
          ciudad_origen,
          ciudad_destino,
          recoger_puerta,
          direccion_origen,
          entregar_puerta,
          direccion_destino,
        );

      case 'Maritimo':
        return new Logistica_Maritima(
          ciudad_origen,
          ciudad_destino,
          recoger_puerta,
          direccion_origen,
          entregar_puerta,
          direccion_destino,
        );
    }
  }
}
