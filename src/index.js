function updateWeather(result) {
  let tempResponse = document.querySelector("#temperature");
  let temperature = result.data.temperature.current;
  let city = document.querySelector("#city");
 console.log(result.data);
  city.innerHTML = result.data.city;
  tempResponse.innerHTML = Math.round(temperature);

  let condition = document.querySelector("#description");
  condition.innerHTML = result.data.condition.description;

  let humid = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");

  humid.innerHTML = result.data.temperature.humidity ;
  wind.innerHTML = result.data.wind.speed;

}

function searchCity(city) {
  let apiKey = "da0374bt080af181f43co47957d8c63f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  // This function makes the API call for updating the user interface
  // Getting the result of this API URL
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
  
  searchCity(input.value);
}

document.addEventListener("DOMContentLoaded", function() {
  let searching = document.querySelector("#search-form");
  searching.addEventListener("submit", handleSearchSubmit);
});