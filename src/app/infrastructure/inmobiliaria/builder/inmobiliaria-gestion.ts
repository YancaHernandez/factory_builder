import { ViviendaModel } from 'src/app/domain/models/vivienda.model';


export class InmobiliariaGestion {
  public total: number = 0;
  constructor(
    private vivienda: ViviendaModel
  ) { }

  public cargo_por_habitaciones() {
    this.total += this.vivienda.habitaciones * 500;
    return this;
  }
  public cargo_por_pisos() {
    this.total += this.vivienda.pisos * 2000;
    return this;
  }
  public cargo_por_banos() {
    this.total += this.vivienda.banos * 250;
    return this;
  }

}
