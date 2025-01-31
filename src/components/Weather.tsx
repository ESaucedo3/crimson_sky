import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = () => {
      console.log('Fetching...');
    }

    fetchWeather();
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