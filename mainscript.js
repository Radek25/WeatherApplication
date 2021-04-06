let WeatherCounter = 0;

document.addEventListener("keyup", async function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const DataFromAPI = await GetWeatherFromAPI(GetLocationFromInput());
      SaveDataFromAPI(DataFromAPI); //Add try catch!
      CreateWeatherTile();
      WeatherCounter++;
    }
});