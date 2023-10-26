import { Injectable } from '@angular/core';
import { direccion_centrar_por_ciudad } from '@domain/data/direcciones';
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

    //Calcular cargo por recorrido en carretera
    this.recorrido_carretera(envio.ciudad_origen, envio.ciudad_destino);

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

}
