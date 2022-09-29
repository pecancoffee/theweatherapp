function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(" , ", " - ");
  timeDisplay.textContent = formattedString;
}

setInterval(refreshTime, 1000);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function convertToCelsius(event) {
  event.preventDefult();
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = 15;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = 75;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFahrenheit);