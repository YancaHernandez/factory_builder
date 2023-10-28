import { direccion_centrar_por_ciudad } from "@domain/data/direcciones";
import { EnvioModel } from "@domain/models/envio.model";

export abstract class Logistica_Transporte {
  protected total: number = 0;

  constructor(
    protected envio: EnvioModel
  ) {
    this.total = 500;
    this.calcular_costos_adicionales();
  }

  abstract calcular_costo_total(): number

  private calcular_costos_adicionales() {
    //Recoger en puerta
    if (this.envio.recoger_puerta) {
      //Calcular cargo por recorrido urbano sin carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[this.envio.ciudad_origen], this.envio.direccion_origen);
    }
    //Entregar puerta
    if (this.envio.entregar_puerta) {
      //Calcular cargo por recorrido urbano con carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[this.envio.ciudad_destino], this.envio.direccion_destino, true);
    }
  }

  protected recorrido_urbano(origen: string = '', destino: string = '', con_carga: boolean = false) {
    this.total += con_carga ? 75 : 50;
    console.info('PATRON')
    console.log(`Transportar por la ciudad desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido urbano ${con_carga ? 'con' : 'sin'}: ${con_carga ? 75 : 50}`)
  }

}
