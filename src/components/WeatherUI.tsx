import '../assets/weather_design.css';
import { useEffect, useMemo, useRef, useState } from "react";
import { Weather } from "../models/Weather";
import { weatherService } from '../services/WeatherService';
import WeatherBackground from './WeatherBackground';

const weatherConditions = [
  { codes: [0], type: 'clear' },
  { codes: [1, 2, 3], type: 'cloudy' },
  { codes: [45, 48], type: 'foggy' },
  { codes: [51, 53, 55], type: 'drizzle'  },
  { codes: [56, 57], type: 'freezing-drizzle'  },
  { codes: [61, 63, 65], type: 'rain'  },
  { codes: [66, 67], type: 'freezing-rain'  },
  { codes: [71, 73, 75], type: 'snow'  },
  { codes: [77], type: 'snow-grains'  },
  { codes: [80, 81, 82], type: 'showers'  },
  { codes: [85, 86], type: 'snow-showers'  },
  { codes: [95], type: 'thunderstorm'  },
  { codes: [96, 99], type: 'thunderstorm-hail'  },
]

const determineWeatherType = (code: number): string => {
  const condition = weatherConditions.find(c => c.codes.includes(code));
  return condition ? condition.type : "void";
}

const WeatherUI = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchWeatherData = async () => {
      setLoading(true);
      
      try {
        const weatherData = await weatherService.getWeatherData(controller);
        setWeather(weatherData!);
      } 
      catch (e) {
        setError(true);
        if (e instanceof Error) {
          console.error("Error Type:", e.name);
          console.error("Error Message:", e.message);
        }
        else {
          console.log("Something went wrong", e);
        }
      }
      finally {
        setLoading(false);
      }
    }

    // fetchWeatherData();
    
    return () => controller.abort();
  }, []);

  // const weatherType = useMemo(() => {
  //   if (!weather) return;
  //   return determineWeatherType(weather.current.weather_code);
  // }, [weather]);

  const weatherType = "cloudy";
  
  if (loading) return <h1>Loading...</h1>
  
  const CanvasError = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#A8A9AD";

      ctx.beginPath();
      ctx.fillStyle = "#3EF"
      ctx.arc(150, 150, 100, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = "#333";

      ctx.beginPath();
      ctx.arc(120, 125, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(180, 125, 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(150, 200, 30, 0, Math.PI, true);
      ctx.fill();
    }, []);
  
    return <canvas className='error-design' width={300} height={300} ref={canvasRef} />;
  };
  
  if (error) return (
    <section className='fixed top-[0] left-[0] w-full h-full grid place-content-center'>
      <h1 className='text-center'>Oh No...</h1>
      <CanvasError />
      <p>Something went wrong when retrieving the current weather perhaps it would be wise to refresh...</p>
    </section>
  );

  return (
    <>
      <div className='weather-container z-[-1]'>
        {weatherType ? <WeatherBackground weatherType={weatherType} /> : <div>Void...</div>}
      </div>
      <section className="px-6">
        <h1 className="text-center text-sky-700">Crimson Sky</h1>
      </section>
    </>
  );
}

export default WeatherUI;