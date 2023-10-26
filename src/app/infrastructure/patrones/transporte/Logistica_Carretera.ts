import { Logistica_Transporte } from "./Logistica_Transporte";
import { Ciudades } from "@domain/entities/ciudades";

export class Logistica_Carretera extends Logistica_Transporte {

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
    //Calcular cargo por recorrido en carretera
    this.recorrido_carretera(this.ciudad_origen, this.ciudad_destino);
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
