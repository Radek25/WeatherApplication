const Main = document.querySelector('main');

function CreateTile(WeatherData, WeatherDataID) {
    const WeatherTile = document.createElement('div');
    WeatherTile.classList.add('weather-tile')
    Main.appendChild(WeatherTile);
    WeatherTile.id = WeatherDataID;

    CreateRemoveTileDiv(WeatherTile);
    CreateLocationAndCountryDiv(WeatherTile, WeatherData);
    CreateTemperatureDiv(WeatherTile, WeatherData);
    CreateIconDiv(WeatherTile, WeatherData)
    CreateDescriptionDiv(WeatherTile, WeatherData);
    CreateExtraInfoDiv(WeatherTile, WeatherData);
    ShowRemoveTail();

}
