function MainFunction() {
    
    WeatherFromAPI(GetLocalStorage());

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            SetLocalStorage(GetLocationFromInput());
            Main.innerHTML = '';
            WeatherFromAPI(GetLocalStorage());

        }
    });
}
MainFunction();