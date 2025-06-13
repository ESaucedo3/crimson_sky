import { useState } from "react";
import WeatherStartup from "./components/WeatherStartup";
import WeatherUI from "./components/WeatherUI";
import { WeatherChoice } from "./models/WeatherChoice";

export default function App() {
  const [weatherOptionSelected, setWeatherOptionSelected] = useState<boolean>(false);
  const [weatherOption, setWeatherOption] = useState<WeatherChoice>({ option: '', location: null });


  const weatherOptionsHandler = (weatherOptionDecision: WeatherChoice) => {
    if (weatherOptionDecision.option && weatherOptionDecision.location) console.log('Showing Current Weather');
    else console.log('Searching Weather');
    console.log(weatherOptionDecision);
    setWeatherOption(weatherOptionDecision);
    setWeatherOptionSelected(true);
  }

  // TODO refactor within WeatherStartup instead back to what decision was chosen
  return (
    <main className="relative">
      {weatherOptionSelected ? <WeatherUI weatherChoice={weatherOption} /> : <WeatherStartup onWeatherOptionSelect={weatherOptionsHandler} />}
    </main>
  );
}
