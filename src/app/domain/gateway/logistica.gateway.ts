import { EnvioModel } from "@domain/models/envio.model";

export abstract class LogisticaGateway {
  abstract calcular_costo_total(envio: EnvioModel): number
}
