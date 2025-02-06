import { useEffect, useState } from "react";
import api from "../services/AxiosService";

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchWeatherData = async () => {
      try {
        const response = await api.get('', { signal });
        if (!response) throw new Error("Something went wrong, when retrieving weather data");
        console.log(response.data);
      } 
      catch (e) {
        if (e instanceof Error) {
          if (e.name === "CanceledError") {
            console.info("Success, only 1 API call was made");
          }
          else {
            console.error(`Error name: ${e.name} | Error message: ${e.message}`);
          }
        }
      }
    }
  
    fetchWeatherData();

    return () => controller.abort();
  }, []);

  return (
    <>
      <img className="absolute left-[0] top-[0] w-full h-full z-[-1]" src="https://assets-prd.ignimgs.com/2024/08/23/batmanarkhamshadow-preview-blogroll-1724451913417.jpg" alt="" />
      <section className="px-6 z-[1]">
        <h1 className="text-center">Crimson Sky</h1>
      </section>
    </>
  );
}

export default Weather;