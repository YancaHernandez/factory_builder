import { Logistica_Transporte } from "./Logistica_Transporte";
import { direccion_aeropuerto_por_ciudad, direccion_centrar_por_ciudad } from "@domain/data/direcciones";
import { Ciudades } from "@domain/entities/ciudades";

export class Logistica_Aerea extends Logistica_Transporte {

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
    //Calcular cargo por recorrido urbano con carga al aeropuerto
    this.recorrido_urbano(this.direccion_destino, direccion_aeropuerto_por_ciudad[this.ciudad_origen], true);
    //Calcular cargo por recorrido en avion
    this.recorrido_aereo(this.ciudad_origen, this.ciudad_destino);
    //Calcular cargo por recorrido urbano con carga del aeropuerto a la central
    this.recorrido_urbano(direccion_aeropuerto_por_ciudad[this.ciudad_destino], direccion_centrar_por_ciudad[this.ciudad_destino], true);
    //Retornar valor total
    return this.total;
  }

  private recorrido_aereo(origen: string, destino: string) {
    this.total += 1000;
    console.info('PATRON')
    console.log(`Transportar por aire desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido en carretera: 1000`)
  }

}
