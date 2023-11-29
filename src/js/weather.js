const weather = (() => {
  async function fetchForecast(location) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=6e5b4cb441f2454f9b7122427232811&q=${encodeURI(
      location,
    )}&days=3`;
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
      avgTempCelsius: day.day.avgtemp_c,
      avgTempFahrenheit: day.day.avgtemp_f,
      weatherConditionText: day.day.condition.text,
      weatherConditionIcon: `https:${day.day.condition.icon}`,
      maxTempCelsius: day.day.maxtemp_c,
      maxTempFahrenheit: day.day.maxtemp_f,
      minTempCelsius: day.day.mintemp_c,
      minTempFahrenheit: day.day.mintemp_f,
    };
  }

  async function getForecast(location) {
    const data = await fetchForecast(location);

    if (data.error) {
      return { error: data.error };
    }

    const forecast = {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
    };

    forecast.forecastDays = data.forecast.forecastday.map(formatForecastDay);

    return forecast;
  }

  return { getForecast };
})();

export default weather;
