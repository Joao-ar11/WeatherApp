const Interface = (() => {
  let firstTime = true;
  let unit = "celsius";

  function changeCurrentWeahter(weather) {
    // Location paragraph element
    document.querySelector(".location").textContent =
      `${weather.location.name}, ${weather.location.region}/` +
      `${weather.location.country}`;

    // Current condition text paragraph element
    document.querySelector(".current-condition-text").textContent =
      weather.currentDay.conditionText;

    // Current condition image element
    document.querySelector(".current-condition-icon").src =
      weather.currentDay.conditionIcon;

    // Last time weather was updated paragraph element
    document.querySelector(".current-date").textContent = new Date(
      weather.currentDay.date,
    ).toLocaleString();

    // Current temperature paragraph element
    document.querySelector(".current-temperature").textContent =
      weather.currentDay.temp[unit] + (unit === "celsius" ? "°C" : "°F");

    // Max current temperature paragraph element
    document.querySelector(".current-max-temperature").textContent =
      weather.forecastDays[0].maxTemp[unit] +
      (unit === "celsius" ? "°C" : "°F");

    // Min current temperature paragraph element
    document.querySelector(".current-min-temperature").textContent =
      weather.forecastDays[0].minTemp[unit] +
      (unit === "celsius" ? "°C" : "°F");
  }

  function changeForecastWeather(forecastDay, index) {
    // Forecast condition paragraph element
    document.querySelectorAll(".forecast-condition-text")[index].textContent =
      forecastDay.weatherConditionText;

    // Forecast condition image element
    document.querySelectorAll(".forecast-condition-icon")[index].src =
      forecastDay.weatherConditionIcon;

    // Forecast date paragraph element
    document.querySelectorAll(".forecast-date")[index].textContent = new Date(
      forecastDay.date,
    ).toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    // Forecast average temperature paragraph element
    document.querySelectorAll(".forecast-temperature")[index].textContent =
      forecastDay.avgTemp[unit] + (unit === "celsius" ? "°C" : "°F");

    // Forecast max temperature paragraph element
    document.querySelectorAll(".forecast-max-temperature")[index].textContent =
      forecastDay.maxTemp[unit] + (unit === "celsius" ? "°C" : "°F");

    // Forecast min temperature paragraph element
    document.querySelectorAll(".forecast-min-temperature")[index].textContent =
      forecastDay.minTemp[unit] + (unit === "celsius" ? "°C" : "°F");
  }

  function changeWeather(weather) {
    if (firstTime) {
      firstTime = false;
      document.querySelector(".current-container").style.display = "flex";
      document.querySelector(".forecasts-section").style.display = "flex";
    }
    changeCurrentWeahter(weather);
    weather.forecastDays.slice(1).forEach(changeForecastWeather);
  }

  function changeUnit(weather) {
    document.querySelector(".change-unit").textContent = `Change to ${unit}`;
    unit = unit === "celsius" ? "fahrenheit" : "celsius";
    changeWeather(weather);
  }

  return { changeWeather, changeUnit };
})();

export default Interface;
