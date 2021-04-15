const Main = document.querySelector('main');
function CreateTile(WeatherData) {
    const WeatherTile = document.createElement('div');
    WeatherTile.classList.add('weather-tile')
    Main.appendChild(WeatherTile);

    const DeleteSign = document.createElement('div');
    DeleteSign.classList.add('delete-sign');
    WeatherTile.appendChild(DeleteSign);

    const LocationAndCountry = document.createElement('p');
    LocationAndCountry.classList.add('location-and-country');
    LocationAndCountry.innerHTML = `${WeatherData.name}, ${WeatherData.sys.country}`;
    WeatherTile.appendChild(LocationAndCountry);

    const Temperature = document.createElement('p');
    Temperature.classList.add('temperature');
    Temperature.innerHTML = `${Math.floor((WeatherData.main.temp - 273.15), 2)}  &degC`
    WeatherTile.appendChild(Temperature);

    const Icon = document.createElement('div');
    Icon.classList.add('weather-icon');
    WeatherTile.appendChild(Icon);

    const Description = document.createElement('div');
    Description.classList.add('weather-description');
    WeatherTile.appendChild(Description);

    const ExtraDataWrapper = document.createElement('div');
    ExtraDataWrapper.classList.add('extra-data-wrapper');
    let ExtraData = [];
    for (let index = 0; index < 3; index++) {
        ExtraData[index]= document.createElement('div');
        ExtraData[index].classList.add(`extra-data-${index}`)
        ExtraDataWrapper.appendChild(ExtraData[index]);
    }
    WeatherTile.appendChild(ExtraDataWrapper);

    const SunTimeWrapper = document.createElement('div');
    SunTimeWrapper.classList.add('sun-time-wrapper');
    let SunTime = [];
    for (let index = 0; index < 2; index++) {
        SunTime[index] = document.createElement('div');
        SunTime[index].classList.add(`sun-time-${1}`);
        SunTimeWrapper.appendChild(SunTime[index]);
    }
    WeatherTile.appendChild(SunTimeWrapper);
    // WeatherData.name,
    // WeatherData.sys.country,
    // WeatherData.weather[0].icon,
    // WeatherData.weather[0].description,
    // Math.floor((WeatherData.main.temp - 273.15), 2),
    // WeatherData.main.pressure,
    // Math.floor(WeatherData.wind.speed),
    // WeatherData.main.humidity,
    
}