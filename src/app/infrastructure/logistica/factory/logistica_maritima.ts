import { Logistica_Transporte } from "./logistica_transporte";
import { EnvioModel } from "@domain/models/envio.model";
import { direccion_centrar_por_ciudad, direccion_puerto_por_ciudad } from "@domain/data/direcciones";

export class Logistica_Maritima extends Logistica_Transporte {
  constructor(
    envio: EnvioModel
  ) { super(envio) }

  //Calcular costo total
  calcular_costo_total(): number {
    //Calcular cargo por recorrido urbano con carga al puerto
    this.recorrido_urbano(this.envio.direccion_destino, direccion_puerto_por_ciudad[this.envio.ciudad_origen], true);
    //Calcular cargo por recorrido en barco
    this.recorrido_maritimo(this.envio.ciudad_origen, this.envio.ciudad_destino);
    //Calcular cargo por recorrido urbano con carga del puerto a la central
    this.recorrido_urbano(direccion_puerto_por_ciudad[this.envio.ciudad_destino], direccion_centrar_por_ciudad[this.envio.ciudad_destino], true);

    //Retornar valor total
    return this.total;
  }

  private recorrido_maritimo(origen: string, destino: string) {
    this.total += 500;
    console.info('PATRON')
    console.log(`Transportar por mar desde ${origen} hasta ${destino}`);
    console.log(`Cargo por recorrido en barco: 500`);
  }


}
