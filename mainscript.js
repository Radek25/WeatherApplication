function MainFunction() {
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            SetLocalStorage(GetLocationFromInput());
           window.location.reload();
        }
    });
    WeatherFromAPI();
}
MainFunction();