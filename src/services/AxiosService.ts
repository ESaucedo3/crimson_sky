import axios, {AxiosError, CanceledError} from "axios";

const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&hourly=weather_code&forecast_days=1",
  timeout: 4000,
});

api.interceptors.request.use((config) => config, handleAxiosError);
api.interceptors.response.use((response) => response, handleAxiosError);

function handleAxiosError(e: AxiosError): Promise<AxiosError> {
  if (axios.isCancel(e)) {
    if (e instanceof CanceledError) {
      console.info("Success!, only 1 API call was made");
      return Promise.resolve(null as never);
    }
  }

  if (e.response) {
    console.error(e.response.data);
  } else if (e.request) {
    console.error(e.request);
  } else {
    console.error(e.message);
  }

  return Promise.reject(e);
}

export default api;
