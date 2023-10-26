import { Component } from '@angular/core';
import { Ciudades } from '@domain/entities/ciudades';
import { Calculos3 } from '../../utils/calculos_version_3';

@Component({
  selector: 'logistica-version-3',
  templateUrl: './logistica_version_3.component.html',
  styleUrls: ['./logistica_version_3.component.scss']
})
export class LogisticaVersion3Component {
  public ciudad_origen: Ciudades = Ciudades.Valledupar;
  public ciudad_destino: Ciudades = Ciudades.Medellin;
  public recoger_puerta: boolean = false;
  public direccion_origen: string = 'Mi casa';
  public entregar_puerta: boolean = false;
  public direccion_destino: string = 'Su casa';
  public tipo_transporte: 'Terrestre' | 'Aereo' | 'Maritimo' = 'Terrestre';


  total_costo = 0;
  constructor() { }


  calcular() {
    const calculo = new Calculos3();
    this.total_costo = calculo.calcular_costo_envio(
      this.ciudad_origen,
      this.ciudad_destino,
      this.recoger_puerta,
      this.direccion_origen,
      this.entregar_puerta,
      this.direccion_destino,
      this.tipo_transporte
    );
  }
}
