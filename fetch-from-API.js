const Key = '37300b07121f5e169e690b82550938f4';

async function GetWeatherFromAPI(Location) {
    let APIWebside = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&lang=pl&APPID=${Key}`;

    const DataFromAPI = await fetch(APIWebside)
    if (DataFromAPI.ok) {
        return DataFromAPI.json()
    } else {
        alert('Nie znaleziono lokalizacji!');
        return Promise.reject(`Error: ${DataFromAPI.status}`)
    }
}
