//Temporarily!!

let WeatherCounter = 0;

// Execute a function when the user releases a key on the keyboard
document.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    CreateWeatherDiv();
    WeatherCounter++;
  }
});

//Temporarily!!
const WeatherWindow = document.querySelector('main');

function CreateWeatherDiv() {
    if (WeatherCounter <=3) {
        const WeatherDiv = document.createElement('div');
        WeatherDiv.classList.add('weather-div');
        WeatherWindow.appendChild(WeatherDiv);
    }
    else{
        alert('Too many Weather Tiles!')
    }
}