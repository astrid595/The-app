function formatDate(timestamp) {
    let date = new Date (timestamp);
    let hours = date.getHours();
    if (hours <10) {
        hours = `0${hours}`;
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
return `${day}`;
}



function displayTemperature(response){
    


let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round (response.data.main.temp);

let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.name;

let conditionElement = document.querySelector("#condition");
conditionElement.innerHTML = response.data.weather[0].description;

let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.dt*1000);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
iconElement.setAttribute("alt", response.data.weather[0].description);

}


let apiKey = "c8116d2b99630d13abef344e372457d3";
let city = "Lisbon";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c8116d2b99630d13abef344e372457d3&units=metric";

axios.get(apiUrl).then(displayTemperature);


function search(city) {

}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);