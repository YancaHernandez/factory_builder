import { Injectable } from '@angular/core';
import { InmobiliariaGateway } from 'src/app/domain/gateways/inmobiliaria.gateway';
import { ViviendaModel } from 'src/app/domain/models/vivienda.model';

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
    const costo_total = this.total;
    this.total = 0;
    return costo_total;
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

}
