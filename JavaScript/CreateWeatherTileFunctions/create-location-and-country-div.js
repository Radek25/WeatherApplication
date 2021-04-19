function CreateLocationAndCountryDiv(WeatherTile, WeatherData) {
    const LocationAndCountry = document.createElement('p');
    LocationAndCountry.classList.add('location-and-country');
    LocationAndCountry.innerHTML = `${WeatherData.name}, ${WeatherData.sys.country}`;
    WeatherTile.appendChild(LocationAndCountry);
}