function MainFunction() {
    let SearchButton = document.querySelector('.fa-search-location')
    
    WeatherFromAPI(GetLocalStorage());

    SearchButton.addEventListener('click', ()=>{
        alert('Funkcjonalność w rozbudowie :/ Aby wyszukać lokalizacje, wprowadź jej nazwę i naćiśnij Enter!')
    })
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            // SearchButton.click();
            SetLocalStorage(GetLocationFromInput());
            Main.innerHTML = '';
            WeatherFromAPI(GetLocalStorage());
        }
    });

}

MainFunction();