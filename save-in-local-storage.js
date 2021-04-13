const LSKey = 'Weather';
let DataToLocalStorage = [];

let Data = {
    Id : null,
    Location : null,
    Country : null,
    Icon : null,
    Desc : null,
    Temp : null, //Temperature
    Pres : null, //Pressure
    Wind : null,
    Humi : null, //Humidity
}
function SaveDataFromAPI(DataFromApi) {
    if(WeatherCounter < 4){
    Data.Id = new Date().getTime();
    Data.Location = DataFromApi.name;
    Data.Country = DataFromApi.sys.country;
    Data.Icon = DataFromApi.weather[0].icon;
    Data.Desc = DataFromApi.weather[0].description;
    Data.Temp = Math.floor((DataFromApi.main.temp - 273.15), 2);
    Data.Pres = DataFromApi.main.pressure;
    Data.Wind = Math.floor(DataFromApi.wind.speed);
    Data.Humi = DataFromApi.main.humidity;

    PushDataToArray();
    }
}

function PushDataToArray() {
    console.log(Data);
    DataToLocalStorage.push(JSON.parse(JSON.stringify(Data)));
    console.log(DataToLocalStorage);
    SetToLocalStorage();
}

function SetToLocalStorage() {
    localStorage.setItem(LSKey, JSON.stringify(DataToLocalStorage));
}