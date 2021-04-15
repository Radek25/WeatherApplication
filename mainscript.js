function MainFunction() {
    
    WeatherFromAPI();
    
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            SetLocalStorage(GetLocationFromInput());
        }
    });

}
MainFunction();