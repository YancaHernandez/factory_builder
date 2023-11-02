import { Injectable } from '@angular/core';
import { InmobiliariaGateway } from 'src/app/domain/gateways/inmobiliaria.gateway';
import { EnumCategorias, ViviendaModel } from 'src/app/domain/models/vivienda.model';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService implements InmobiliariaGateway {
  private total: number = 0;
  constructor() { }

  calcular_costo_vivienda(vivienda: ViviendaModel): number {
    this.cargo_por_habitaciones(vivienda.habitaciones);
    this.cargo_por_pisos(vivienda.habitaciones);
    this.cargo_por_banos(vivienda.habitaciones);
    // if (vivienda.piscina) {
    //   this.cargo_por_piscina();
    // }
    // if (vivienda.jardin) {
    //   this.cargo_por_jardin();
    // }
    // if (vivienda.garaje) {
    //   this.cargo_por_garaje();
    // }

    switch (vivienda.categoria) {
      case EnumCategorias.A:
        this.cargo_por_piscina();
        break;
      case EnumCategorias.B:
        this.cargo_por_piscina();
        this.cargo_por_jardin();
        break;
      case EnumCategorias.C:
        this.cargo_por_piscina();
        this.cargo_por_jardin();
        break;
      default:
        break;
    }
    return this.total;
  }

  private cargo_por_habitaciones(cantidad: number) {
    this.total += cantidad * 500;
  }
  private cargo_por_pisos(cantidad: number) {
    this.total += cantidad * 2000;
  }
  private cargo_por_banos(cantidad: number) {
    this.total += cantidad * 250;
  }

  private cargo_por_piscina() {
    this.total += 4000;
  }

  private cargo_por_jardin() {
    this.total += 3000;
  }

  private cargo_por_garaje() {

  }

}
