function updateWeather(result){
    let tempResponse = document.querySelector("#temperature");
    let temperature = result.data.temperatue.current;
    let city = document.querySelector("#city");

    
    city.innerHTML = result.data.city;
    tempResponse.innerHTML = Math.round(temperature);
}


function searchCity(city){
    let apiKey = `da0374bt080af181f43co47957d8c63f`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    // this function makes the api call for updating the user interface
    //geting the result of this api url
    axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
 
  searchCity(input.value)
}

let searching = document.querySelector("#search-form");
searching.addEventListener("submit", handleSearchSubmit);

