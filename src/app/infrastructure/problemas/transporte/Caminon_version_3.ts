import { Ciudades } from '@domain/entities/ciudades';
import { direccion_aeropuerto_por_ciudad, direccion_centrar_por_ciudad, direccion_puerto_por_ciudad } from "@domain/data/direcciones";



export class Camion3 {
  total: number = 0;

  //Calcular costo total
  calcular_cosoto_total(
    ciudad_origen: Ciudades,
    ciudad_destino: Ciudades,
    recoger_puerta: boolean = false,
    direccion_origen: string = '',
    entregar_puerta: boolean = false,
    direccion_destino: string = '',
    tipo_transporte: 'Terrestre' | 'Aereo' | 'Maritimo',
  ): number {

    this.total = 500;

    //Recoger en puerta
    if (recoger_puerta) {
      //Calcular cargo por recorrido urbano sin carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[ciudad_origen], direccion_origen);
    }

    //Tipo de transporte
    switch (tipo_transporte) {
      case 'Aereo':

        //Calcular cargo por recorrido urbano con carga al aeropuerto
        this.recorrido_urbano(direccion_destino, direccion_aeropuerto_por_ciudad[ciudad_origen], true);
        //Calcular cargo por recorrido en avion
        this.recorrido_aereo(ciudad_origen, ciudad_destino);
        //Calcular cargo por recorrido urbano con carga del aeropuerto a la central
        this.recorrido_urbano(direccion_aeropuerto_por_ciudad[ciudad_destino], direccion_centrar_por_ciudad[ciudad_destino], true);

        break;

      case 'Maritimo':

        //Calcular cargo por recorrido urbano con carga al puerto
        this.recorrido_urbano(direccion_destino, direccion_puerto_por_ciudad[ciudad_origen], true);
        //Calcular cargo por recorrido en barco
        this.recorrido_maritimo(ciudad_origen, ciudad_destino);
        //Calcular cargo por recorrido urbano con carga del puerto a la central
        this.recorrido_urbano(direccion_puerto_por_ciudad[ciudad_destino], direccion_centrar_por_ciudad[ciudad_destino], true);

        break;

      case 'Terrestre':

        //Calcular cargo por recorrido en carretera
        this.recorrido_carretera(ciudad_origen, ciudad_destino);

        break;
    }

    //Entregar puerta
    if (entregar_puerta) {
      //Calcular cargo por recorrido urbano con carga
      this.recorrido_urbano(ciudad_destino, direccion_destino, true);
    }

    //Retornar valor total
    return this.total;
  }

  private recorrido_urbano(origen: string, destino: string, con_carga: boolean = false) {
    this.total += con_carga ? 75 : 50;
    console.log(`Transportar por la ciudad desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido urbano ${con_carga ? 'con' : 'sin'}: ${con_carga ? 75 : 50}`)
  }

  private recorrido_carretera(origen: string, destino: string) {
    this.total += 200;
    console.log(`Transportar por carretera desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido en carretera: 200`)
  }

  private recorrido_aereo(origen: string, destino: string) {
    this.total += 1000;
    console.log(`Transportar por aire desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido en avion: 1000`)
  }

  private recorrido_maritimo(origen: string, destino: string) {
    this.total += 500;
    console.log(`Transportar por mar desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido en barco: 500`)
  }

}
