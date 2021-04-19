const Main = document.querySelector('main');

function CreateTile(WeatherData, WeatherDataID) {
    const WeatherTile = document.createElement('div');
    WeatherTile.classList.add('weather-tile')
    Main.appendChild(WeatherTile);
    WeatherTile.id = WeatherDataID;

    const RemoveTile = document.createElement('div');
    RemoveTile.classList.add('remove-tile');
    RemoveTile.innerHTML = '<i class="fas fa-trash"></i>';
    WeatherTile.appendChild(RemoveTile);

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
    ShowRemoveTail();

    WeatherTile.addEventListener('click', ()=>{
        WeatherTile.remove();
        WeatherTileID = WeatherTile.id;  
        RemoveFromLocalStorage(WeatherTileID);
    })
}
