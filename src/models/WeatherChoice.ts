export class WeatherChoice {
  option: string;
  location?: GeolocationCoordinates | null;

  constructor(data: WeatherChoice) {
    this.option = data.option;
    this.location = data.location;
  }
}
