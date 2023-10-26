import { Ciudades } from '@domain/entities/ciudades';
import { direccion_centrar_por_ciudad } from '@domain/data/direcciones';


export class Camion {
  private total: number = 0;

  //Calcular costo total
  calcular_cosoto_total(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean = false,
    direccion_origen: string = '',
    entregar_puerta: boolean = false,
    direccion_destino: string = '',
  ): number {

    this.total = 500;

    //Recoger en puerta
    if (recoger_puerta) {
      //Calcular cargo por recorrido urbano sin carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[ciudad_origen], direccion_origen);
    }

    //Calcular cargo por recorrido en carretera
    this.recorrido_carretera(ciudad_origen, ciudad_destino);

    //Entregar puerta
    if (entregar_puerta) {
      //Calcular cargo por recorrido urbano con carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[ciudad_destino], direccion_destino, true);
    }

    //Retornar valor total
    return this.total;
  }

  private recorrido_urbano(origen: string = '', destino: string = '', con_carga: boolean = false) {
    this.total += con_carga ? 75 : 50;
    console.log(`Transportar por la ciudad desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido urbano ${con_carga ? 'con' : 'sin'}: ${con_carga ? 75 : 50}`)
  }

  private recorrido_carretera(origen: string = '', destino: string = '') {
    this.total += 200;
    console.log(`Transportar por carretera desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido en carretera: 200`)
  }

}
