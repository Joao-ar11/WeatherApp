const Interface = (() => {
  let firstTime = true;
  let unit = "celsius";

  function changeCurrentWeahter(weather) {
    // Location paragraph element
    document.querySelector(".location").textContent =
      `${weather.location.name}, ${weather.location.region} ` +
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

  function changeWeather(weather) {
    if (firstTime) {
      firstTime = false;
      document.querySelector(".current-container").style.display = "grid";
      document.querySelector(".forecasts-section").style.display = "flex";
    }
    changeCurrentWeahter(weather);
  }

  return { changeWeather };
})();

export default Interface;
