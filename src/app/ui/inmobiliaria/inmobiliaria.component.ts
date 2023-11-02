import { Component } from '@angular/core';
import { EnumCategorias, ViviendaModel } from 'src/app/domain/models/vivienda.model';
import { InmobiliariaUseCase } from 'src/app/domain/usecases/inmobiliaria.usecase';

@Component({
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent {
  public habitaciones: number = 1;
  public pisos: number = 1;
  public banos: number = 1;
  public categoria: string = 'A';

  total_costo = 0;
  constructor(
    private inmobiliariaUseCase: InmobiliariaUseCase
  ) { }


  calcular() {

    const vivienda: ViviendaModel = {
      habitaciones: this.habitaciones,
      pisos: this.pisos,
      banos: this.banos,
      categoria: this.getCategoria()
    }
    this.total_costo = this.inmobiliariaUseCase.calcular_costo_vivienda(vivienda)
  }

  private getCategoria(): EnumCategorias {
    switch (this.categoria) {
      case 'A':
        return EnumCategorias.A
      case 'B':
        return EnumCategorias.B
      case 'C':
        return EnumCategorias.C
      case 'D':
        return EnumCategorias.D
      default:
        throw new Error("No existe esa categoria");
    }
  }
}
