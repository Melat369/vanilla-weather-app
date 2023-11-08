function updateWeather(result) {
  let tempResponse = document.querySelector("#temperature");
  let city = document.querySelector("#city");
  let condition = document.querySelector("#description");
  let humid = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let temperature = result.data.temperature.current;
  let iconElement = document.querySelector("#icon");
 
  let date = new Date(result.data.time * 1000);

  console.log(result.data);
  time.innerHTML =  timeHandler(date);
  city.innerHTML = result.data.city;
  tempResponse.innerHTML = Math.round(temperature);
  condition.innerHTML = result.data.condition.description;
  humid.innerHTML = result.data.temperature.humidity;
  wind.innerHTML = result.data.wind.speed;
  iconElement.innerHTML = `<img src = "${result.data.condition.icon_url}" class ="weather-app-icon"/>`;
}
function timeHandler(date) {
   let hr = date.getHours();
  let min= date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (min < 10) {
    min = `0${min}`;
  }

  return `${day} ${hr}:${min} `;
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

  let searching = document.querySelector("#search-form");
  searching.addEventListener("submit", handleSearchSubmit);

  searchCity("Addis Ababa");
