const Weather = (() => {
  async function fetchForecast(location) {
    const url =
      "http://api.weatherapi.com/v1/forecast.json" +
      `?key=6e5b4cb441f2454f9b7122427232811&q=${encodeURI(location)}&days=3`;
    try {
      const response = await fetch(url);
      const obj = await response.json();
      return obj;
    } catch (error) {
      return { error };
    }
  }

  function formatForecastDay(day) {
    return {
      date: day.date,
      weatherConditionText: day.day.condition.text,
      weatherConditionIcon: `https:${day.day.condition.icon}`,
      avgTemp: {
        celsius: day.day.avgtemp_c,
        fahrenheit: day.day.avgtemp_f,
      },
      maxTemp: {
        celsius: day.day.maxtemp_c,
        fahrenheit: day.day.maxtemp_f,
      },
      minTemp: {
        celsius: day.day.mintemp_c,
        fahrenheit: day.day.mintemp_f,
      },
    };
  }

  function formatCurrentDay(day) {
    return {
      temp: {
        celsius: day.temp_c,
        fahrenheit: day.temp_f,
      },
      conditionText: day.condition.text,
      conditionIcon: `https:${day.condition.icon}`,
      feelsLike: {
        celsius: day.feelslike_c,
        fahrenheit: day.feelslike_f,
      },
      date: day.last_updated,
    };
  }

  async function getWeather(location) {
    const data = await fetchForecast(location);

    if (data.error) {
      return { error: data.error };
    }

    const weather = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      },
      currentDay: formatCurrentDay(data.current),
      forecastDays: data.forecast.forecastday.map(formatForecastDay),
    };

    return weather;
  }

  return { getWeather };
})();

export default Weather;
