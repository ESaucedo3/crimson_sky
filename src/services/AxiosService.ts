import axios, {AxiosError} from "axios";

const api = axios.create({
  // baseURL: "https://api.open-meteo.com/v1",
  baseURL: "https://catfact.ninja/fact",
  timeout: 4000,
});

api.interceptors.request.use((config) => config, handleAxiosError);
api.interceptors.response.use((response) => response, handleAxiosError);

function handleAxiosError(e: AxiosError): Promise<AxiosError> {
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
