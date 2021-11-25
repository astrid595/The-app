function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
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
    return `${day}, ${hours}:${minutes}`;
  }

  function displayForecast () {
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row">`;
    let days = ["Thu", "Fri", "Sat", "Sun"];
    days.forEach(function(day)
   {
    forecastHTML =   
    forecastHTML +  
    `
    <div class="col-2">
      <div class="weather-forecast-date">
          ${day}
      </div>
      <img src="https://tse2.mm.bing.net/th?id=OIP.2MEM7UwySzRAjdqQKS5IwgHaHa&pid=Api" 
      alt=""
      width="20"
      >
      <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-min">
              18°
          </span>
          <span class="weather-forecast-temperature-max">
              12°
          </span>
      </div>
      
    </div>
    `;
   } )
    
   

    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;

  }
  
  function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
  
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
  
    let conditionElement = document.querySelector("#condition");
    conditionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
  
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
  
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
  }
  
  function search(city) {
    let apiKey = "c8116d2b99630d13abef344e372457d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input").value;
    search(cityInputElement);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);
  
  search("London");
  displayForecast();