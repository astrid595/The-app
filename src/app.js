function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours <10) {
    hours = `0${minutes}`;
}


let minutes = date.getMinutes();
if (minutes <10) {
    minutes = `0${minutes}`;

}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let day = days[date.getDay()];
return `${day}; ${hours} ${minutes}`;
}



function displayTemperature(response){



let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round (response.data.main.temp);

let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

let conditionElement = document.querySelector("#condition");
conditionElement.innerHTML = response.data.weather[0].description;

let dateElement = document.querySelector("date");
dateElement.innerHTML = formatDate(response.data.dt*10000);


}




let apiKey = "c8116d2b99630d13abef344e372457d3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c8116d2b99630d13abef344e372457d3&units=metric";

axios.get(apiUrl).then(displayTemperature);