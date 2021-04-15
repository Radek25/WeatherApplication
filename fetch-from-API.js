const WeatherKey = '37300b07121f5e169e690b82550938f4';

function WeatherFromAPI(){
   for (let index = 0; index < GetLocalStorage().length; index++) {
        let Weather = `https://api.openweathermap.org/data/2.5/weather?q=${GetLocalStorage()[index].Location}&lang=pl&APPID=${WeatherKey}`;

        fetch(Weather)
            .then(WeatherData => WeatherData.json())
            .then(WeatherData => {
            console.log(WeatherData);
        })
    }
}