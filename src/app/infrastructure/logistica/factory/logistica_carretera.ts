import { Ciudades } from "@domain/enums/ciudades";
import { Logistica_Transporte } from "./logistica_transporte";
import { EnvioModel } from "@domain/models/envio.model";

export class Logistica_Carretera extends Logistica_Transporte {
  constructor(
    envio: EnvioModel
  ) { super(envio) }

  //Calcular costo total
  calcular_cosoto_total(): number {
    //Calcular cargo por recorrido en carretera
    this.recorrido_carretera(this.envio.ciudad_origen, this.envio.ciudad_destino);
    //Retornar valor total
    return this.total;
  }

  private recorrido_carretera(origen: string = '', destino: string = '') {
    this.total += 200;
    console.info('PATRON')
    console.log(`Transportar por carretera desde ${origen} hasta ${destino}`);
    console.log(`Cargo por recorrido en carretera: 200`)
  }

}
