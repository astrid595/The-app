function displayTemperature(response){

    console.log(response.data);


let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round (response.data.main.temp);

let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

let conditionElement = document.querySelector("#condition");
conditionElement.innerHTML = response.data.weather[0].description;

}




let apiKey = "c8116d2b99630d13abef344e372457d3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c8116d2b99630d13abef344e372457d3&units=metric";

axios.get(apiUrl).then(displayTemperature);