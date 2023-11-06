let searching = document.querySelector("#search-form");
function handleSearchSubmit(event){
event.preventDefault();
let input = document.querySelector("#input-city");
let city = document.querySelector(".weather-app-city");
city.innerHTML= input.value;
}

searching.addEventListener("submit", handleSearchSubmit);