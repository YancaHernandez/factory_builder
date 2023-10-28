import { EnvioModel, TipoTransporte } from "@domain/models/envio.model";
import { Logistica_Transporte } from "./logistica_transporte";
import { Logistica_Aerea } from "./logistica_aerea";
import { Logistica_Carretera } from "./logistica_carretera";
import { Logistica_Maritima } from "./logistica_maritima";

export class LogisticaFactory {
  static createLogistica(envio: EnvioModel): Logistica_Transporte {
    switch (envio.tipo_transporte) {
      case TipoTransporte.Terrestre:
        return new Logistica_Carretera(envio);
      case TipoTransporte.Aereo:
        return new Logistica_Aerea(envio);
      case TipoTransporte.Maritimo:
        return new Logistica_Maritima(envio);
    }
  }
}
