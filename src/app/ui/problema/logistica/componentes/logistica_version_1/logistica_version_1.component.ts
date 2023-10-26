import { Component } from '@angular/core';
import { Ciudades } from '@domain/entities/ciudades';
import { Calculos } from '../../utils/calculos_version_1';

@Component({
  selector: 'logistica-version-1',
  templateUrl: './logistica_version_1.component.html',
  styleUrls: ['./logistica_version_1.component.scss']
})
export class LogisticaVersion1Component {
  public ciudad_origen: Ciudades = Ciudades.Valledupar;
  public ciudad_destino: Ciudades = Ciudades.Medellin;
  public recoger_puerta: boolean = false;
  public direccion_origen: string = 'Mi casa';
  public entregar_puerta: boolean = false;
  public direccion_destino: string = 'Su casa';


  total_costo = 0;
  constructor() { }


  calcular() {
    const calculo = new Calculos();
    this.total_costo = calculo.calcular_costo_envio(
      this.ciudad_origen,
      this.ciudad_destino,
      this.recoger_puerta,
      this.direccion_origen,
      this.entregar_puerta,
      this.direccion_destino
    );
  }
}
