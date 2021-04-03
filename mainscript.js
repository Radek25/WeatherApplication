let WeatherCounter = 0;

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      GetWeatherFromAPI(GetLocationFromInput());
      console.log(GetWeatherFromAPI);
      CreateWeatherTile();
      WeatherCounter++;
    }
});