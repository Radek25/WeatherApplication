function CreateDescriptionDiv(WeatherTile, WeatherData) {
    const Description = document.createElement('p');
    Description.classList.add('weather-description');
    Description.innerHTML = WeatherData.weather[0].description.charAt(0).toUpperCase() + WeatherData.weather[0].description.slice(1);
    WeatherTile.appendChild(Description);
}