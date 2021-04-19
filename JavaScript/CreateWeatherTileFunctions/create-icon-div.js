function CreateIconDiv(WeatherTile, WeatherData) {
    const Icon = document.createElement('img');
    Icon.classList.add('weather-icon');
    Icon.src = `./Icons/${WeatherData.weather[0].icon}.png`
    WeatherTile.appendChild(Icon);
}