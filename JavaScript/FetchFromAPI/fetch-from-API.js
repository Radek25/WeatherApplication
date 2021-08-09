const WeatherKey = '37300b07121f5e169e690b82550938f4';

function WeatherFromAPI(MainArray){
   for (let index = 0; index <MainArray.length; index++) {
        let Weather = `https://api.openweathermap.org/data/2.5/weather?q=${MainArray[index].Location}&lang=pl&APPID=${WeatherKey}`;

        fetch(Weather)
            .then(WeatherData => WeatherData.json())
            .then(WeatherData => {CreateTile(WeatherData, MainArray[index].Id);
        })
        .catch(error => {
            window.location.reload();
            alert('Błąd! Nie znaleziono lokalizacji!');
            RemoveFromLocalStorage(MainArray[index].Id);
        });
    }
}