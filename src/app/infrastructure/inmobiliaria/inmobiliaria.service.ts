import { Injectable } from '@angular/core';
import { InmobiliariaGateway } from 'src/app/domain/gateways/inmobiliaria.gateway';
import { ViviendaModel } from 'src/app/domain/models/vivienda.model';
import { InmobiliariaGestion } from './builder/inmobiliaria-gestion';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService implements InmobiliariaGateway {

  constructor() { }

  calcular_costo_vivienda(vivienda: ViviendaModel): number {
    const inmueble = new InmobiliariaGestion(vivienda)
      .cargo_por_habitaciones()
      .cargo_por_pisos()
      .cargo_por_banos();

    if (vivienda.patio) inmueble.calgo_por_patio();

    if (vivienda.jardin) inmueble.cargo_por_jardin();

    if (vivienda.garaje) inmueble.cargo_por_garaje();

    if (vivienda.piscina) inmueble.calgo_por_patio().cargo_por_piscina();

    return inmueble.total;
  }

}
