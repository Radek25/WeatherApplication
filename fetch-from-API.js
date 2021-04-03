const Key = '37300b07121f5e169e690b82550938f4';

function GetWeatherFromAPI() {
    let City = GetLocationFromInput();
    let APIWebside = `https://api.openweathermap.org/data/2.5/weather?q=${City}&lang=pl&APPID=${Key}`;

    fetch(APIWebside)
    .then(res =>{
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`)
        }
    })
    .then(res => {
        console.log(res);
    })
}
