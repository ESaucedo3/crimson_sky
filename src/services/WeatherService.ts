import {Weather} from "../models/Weather";
import api from "./AxiosService";

class WeatherService {
  async getWeatherData(controller: AbortController) {
    const response = await api.get("", {signal: controller.signal});
    if (!response) return;
    return new Weather(response.data);
  }
}

export const weatherService = new WeatherService();
