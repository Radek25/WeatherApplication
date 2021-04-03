const WeatherWindow = document.querySelector('main');

function CreateWeatherTile() { 
  if (WeatherCounter <=3) {
    let WeatherDiv = document.createElement('div');
    WeatherDiv.classList.add('weather-div');
    WeatherWindow.appendChild(WeatherDiv);
  }
  else{
    alert('Too many Weather Tiles!')
  }
}
