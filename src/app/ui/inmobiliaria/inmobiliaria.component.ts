import { Component } from '@angular/core';
import { ViviendaModel } from 'src/app/domain/models/vivienda.model';
import { InmobiliariaUseCase } from 'src/app/domain/usecases/inmobiliaria.usecase';

@Component({
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent {
  public habitaciones: number = 1;
  public pisos: number = 1;
  public banos: number = 1;

  public piscina: boolean = false;
  public jardin: boolean = false;
  public garaje: boolean = false;
  public patio: boolean = false;


  total_costo = 0;
  constructor(
    private inmobiliariaUseCase: InmobiliariaUseCase
  ) { }


  calcular() {
    const vivienda: ViviendaModel = {
      habitaciones: this.habitaciones,
      pisos: this.pisos,
      banos: this.banos,
      piscina: this.piscina,
      jardin: this.jardin,
      garaje: this.garaje,
      patio: this.patio,
    }
    this.total_costo = this.inmobiliariaUseCase.calcular_costo_vivienda(vivienda)
  }
}
