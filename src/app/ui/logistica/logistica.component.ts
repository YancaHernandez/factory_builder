import { Component } from '@angular/core';
import { Ciudades } from '@domain/enums/ciudades';
import { EnvioModel } from '@domain/models/envio.model';
import { LogisticaUseCase } from '@domain/usecases/logistica.usecase';

@Component({
  selector: 'logistica',
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.scss']
})
export class LogisticaComponent {
  public ciudad_origen: Ciudades = Ciudades.Valledupar;
  public ciudad_destino: Ciudades = Ciudades.Medellin;
  public recoger_puerta: boolean = false;
  public direccion_origen: string = 'Mi casa';
  public entregar_puerta: boolean = false;
  public direccion_destino: string = 'Su casa';


  total_costo = 0;
  constructor(
    private logisticaUseCase: LogisticaUseCase
  ) { }


  calcular() {
    const envio: EnvioModel = {
      ciudad_origen: this.ciudad_origen,
      ciudad_destino: this.ciudad_destino,
      recoger_puerta: this.recoger_puerta,
      direccion_origen: this.direccion_origen,
      entregar_puerta: this.entregar_puerta,
      direccion_destino: this.direccion_destino
    }
    this.total_costo = this.logisticaUseCase.calcular_costo_total(envio)
  }
}
