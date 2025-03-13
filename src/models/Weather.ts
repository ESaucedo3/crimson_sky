export class Weather {
  latitude: number;
  longitude: number;
  current: WeatherCurrent;

  constructor(data: Weather) {
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.current = new WeatherCurrent(data.current);
  }
}

class WeatherCurrent {
  weather_code: number;

  constructor(data: WeatherCurrent) {
    this.weather_code = data.weather_code;
  }
}
