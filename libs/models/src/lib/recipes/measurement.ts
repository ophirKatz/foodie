export enum Unit {
  Cup,
  Teaspoon,
  Tablespoon,
  Pinch,
  Milliliter,
  Liter,
  Gram,
  Kilogram,
}

export interface Measurement {
  amount: number;
  unit: Unit;
}
