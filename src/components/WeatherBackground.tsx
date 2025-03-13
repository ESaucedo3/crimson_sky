type weatherTypeProp = {
  weatherType: string
}

const WeatherBackground = ({ weatherType }: weatherTypeProp) => {
  switch (weatherType) {
    case 'clear':
      return (
        <div>
          Clear Weather
        </div>
      );
    case 'cloudy':
      return (
        <div>
          Cloudy Weather
        </div>
      );
    case 'foggy':
      return (
        <div>
          Foggy Weather
        </div>
      );
    case 'drizzle':
      return (
        <div>
          Drizzle Weather
        </div>
      );
    case 'rain':
      return (
        <div>
          Rainy Weather
        </div>
      );
    case 'freezing-rain':
      return (
        <div>
          Freezing Rain Weather
        </div>
      );
    case 'snow':
      return (
        <div>
          Snowy Weather
        </div>
      );
    case 'snow-grains':
      return (
        <div>
          Snowy Grain Weather
        </div>
      );
    case 'showers':
      return (
        <div>
          Showers Weather
        </div>
      );
    case 'snow-showers':
      return (
        <div>
          Showers Weather
        </div>
      );
    case 'thunderstorm':
      return (
        <div>
          Showers Weather
        </div>
      );
    case 'thunderstorm-hail':
      return (
        <div>
          Showers Weather
        </div>
      );
    default:
      console.log('No weather background to render...');
      break;
  }
}

export default WeatherBackground