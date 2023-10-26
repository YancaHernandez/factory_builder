import { Ciudades } from "@domain/entities/ciudades";
import { direccion_centrar_por_ciudad } from "@domain/data/direcciones";

export abstract class Logistica_Transporte {
  protected total: number = 0;

  constructor(
    protected ciudad_origen: Ciudades,
    protected ciudad_destino: Ciudades,
    protected recoger_puerta: boolean,
    protected direccion_origen: string,
    protected entregar_puerta: boolean,
    protected direccion_destino: string,
  ) {
    this.total = 500;
    this.calcular_costos_adicionales();
  }

  abstract calcular_cosoto_total(): number

  private calcular_costos_adicionales() {
    //Recoger en puerta
    if (this.recoger_puerta) {
      //Calcular cargo por recorrido urbano sin carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[this.ciudad_origen], this.direccion_origen);
    }
    //Entregar puerta
    if (this.entregar_puerta) {
      //Calcular cargo por recorrido urbano con carga
      this.recorrido_urbano(direccion_centrar_por_ciudad[this.ciudad_destino], this.direccion_destino, true);
    }
  }

  protected recorrido_urbano(origen: string = '', destino: string = '', con_carga: boolean = false) {
    this.total += con_carga ? 75 : 50;
    console.info('PATRON')
    console.log(`Transportar por la ciudad desde ${origen} hasta ${destino}`)
    console.log(`Cargo por recorrido urbano ${con_carga ? 'con' : 'sin'}: ${con_carga ? 75 : 50}`)
  }

}
