export namespace City {
  export interface Data extends Coordinates {
    name: string;
    country: string;
    region: string;
  }

  export interface Coordinates {
    lat: number;
    lon: number;
  }
}
