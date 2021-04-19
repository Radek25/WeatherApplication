function CreateTemperatureDiv(WeatherTile, WeatherData) {
    const Temperature = document.createElement('p');
    Temperature.classList.add('temperature');
    Temperature.innerHTML = `${Math.floor(WeatherData.main.temp - 273.15)}  &degC`
    WeatherTile.appendChild(Temperature);
}