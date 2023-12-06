import Weather from "./js/weather.js";
import Interface from "./js/interface.js";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const changeUnitButton = document.querySelector(".change-unit");

let weatherObj = null;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = searchInput.value;
  Weather.getWeather(inputValue)
    .then((data) => {
      weatherObj = data;
      Interface.changeWeather(weatherObj);
    })
    .catch(console.log);
});

changeUnitButton.addEventListener("click", () => {
  Interface.changeUnit(weatherObj);
});
