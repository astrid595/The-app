function displayTemperature (response) {
    console.log(response.data.main.temp);

    let temperatureElement = document.querySelector("#temperature");
    let cityeElement = document.querySelector("#city");
    let descriptionElement = document.querySelector ("#description");
    temperatureElement.innerHTML = Math.round;
    (response.data.main.temp);
    cityeElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
}

let apiKey = "c8116d2b99630d13abef344e372457d3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey};
axios.get(apiUrl).then(displayTemperature);