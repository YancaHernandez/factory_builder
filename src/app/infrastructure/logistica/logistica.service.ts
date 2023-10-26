import { Injectable } from '@angular/core';
import { direccion_aeropuerto_por_ciudad, direccion_centrar_por_ciudad, direccion_puerto_por_ciudad } from '@domain/data/direcciones';
import { LogisticaGateway } from '@domain/gateway/logistica.gateway';
import { EnvioModel } from '@domain/models/envio.model';

@Injectable({
  providedIn: 'root'
})
export class LogisticaService implements LogisticaGateway {

  private total: number = 0;

  //Calcular costo total
  calcular_costo_total(envio: EnvioModel): number {

    this.total = 500;

    //Recoger en puerta
    if (envio.recoger_puerta) {
      //Calcular cargo por recorrido urbano sin carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[envio.ciudad_origen], envio.direccion_origen);
    }

    //Tipo de transporte
    switch (envio.tipo_transporte) {
      case 'Aereo':

        //Calcular cargo por recorrido urbano con carga al aeropuerto
        this.recorrido_urbano(envio.direccion_destino, direccion_aeropuerto_por_ciudad[envio.ciudad_origen], true);
        //Calcular cargo por recorrido en avion
        this.recorrido_aereo(envio.ciudad_origen, envio.ciudad_destino);
        //Calcular cargo por recorrido urbano con carga del aeropuerto a la central
        this.recorrido_urbano(direccion_aeropuerto_por_ciudad[envio.ciudad_destino], direccion_centrar_por_ciudad[envio.ciudad_destino], true);

        break;

      case 'Maritimo':

        //Calcular cargo por recorrido urbano con carga al puerto
        this.recorrido_urbano(envio.direccion_destino, direccion_puerto_por_ciudad[envio.ciudad_origen], true);
        //Calcular cargo por recorrido en barco
        this.recorrido_maritimo(envio.ciudad_origen, envio.ciudad_destino);
        //Calcular cargo por recorrido urbano con carga del puerto a la central
        this.recorrido_urbano(direccion_puerto_por_ciudad[envio.ciudad_destino], direccion_centrar_por_ciudad[envio.ciudad_destino], true);

        break;

      case 'Terrestre':

        //Calcular cargo por recorrido en carretera
        this.recorrido_carretera(envio.ciudad_origen, envio.ciudad_destino);

        break;
    }
    //Entregar puerta
    if (envio.entregar_puerta) {
      //Calcular cargo por recorrido urbano con carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[envio.ciudad_destino], envio.direccion_destino, true);
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
