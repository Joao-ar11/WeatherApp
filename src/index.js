import Weather from "./js/weather.js";
import Interface from "./js/interface.js";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = searchInput.value;
  Weather.getWeather(inputValue)
    .then(Interface.changeWeather)
    .catch(console.log);
});
