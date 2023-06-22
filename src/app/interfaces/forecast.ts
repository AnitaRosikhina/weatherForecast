export namespace Forecast {
  export interface Data {
    current: Current;
    condition: Condition;
    location: Location;
  }

  export interface Current {
    feelslike_c: number;
    feelslike_f: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
  }

  export interface Condition {
    icon: string;
    text: string;
  }

  export interface Location {
    localtime: string;
  }
}
