import { Logistica_Transporte } from "./Logistica_Transporte";
import { direccion_centrar_por_ciudad, direccion_puerto_por_ciudad } from "@domain/data/direcciones";
import { Ciudades } from "@domain/entities/ciudades";

export class Logistica_Maritima extends Logistica_Transporte {

  constructor(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean = false,
    direccion_origen: string = '',
    entregar_puerta: boolean = false,
    direccion_destino: string = '',
  ) {
    super(ciudad_origen, ciudad_destino, recoger_puerta, direccion_origen, entregar_puerta, direccion_destino);
  }

  //Calcular costo total
  calcular_cosoto_total(): number {
    //Calcular cargo por recorrido urbano con carga al puerto
    this.recorrido_urbano(this.direccion_destino, direccion_puerto_por_ciudad[this.ciudad_origen], true);
    //Calcular cargo por recorrido en barco
    this.recorrido_maritimo(this.ciudad_origen, this.ciudad_destino);
    //Calcular cargo por recorrido urbano con carga del puerto a la central
    this.recorrido_urbano(direccion_puerto_por_ciudad[this.ciudad_destino], direccion_centrar_por_ciudad[this.ciudad_destino], true);

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
