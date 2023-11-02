export enum EnumCategorias {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export interface ViviendaModel {
  habitaciones: number;
  pisos: number;
  banos: number;
  categoria: EnumCategorias;
}
