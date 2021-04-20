function CreateExtraInfoDiv(WeatherTile, WeatherData) {
    const ExtraDataWrapper = document.createElement('div');
    ExtraDataWrapper.classList.add('extra-data-wrapper');
    let ExtraData = [];
    for (let index = 0; index < 3; index++) {
        ExtraData[index]= document.createElement('div');
        ExtraData[index].classList.add(`extra-data-${index}`)
        ExtraDataWrapper.appendChild(ExtraData[index]);
    }
    ExtraData[0].innerHTML =`<i class="fas fa-tint"></i> ${WeatherData.main.humidity}%`;
    ExtraData[1].innerHTML =`<i class="fas fa-thermometer-half"></i> ${WeatherData.main.pressure}hPa`;
    ExtraData[2].innerHTML =`<i class="fas fa-wind"></i> ${Math.floor(WeatherData.wind.speed)}m/s`;
    WeatherTile.appendChild(ExtraDataWrapper);
}