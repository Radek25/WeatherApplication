function MainFunction() {
    
    let SearchButton = document.querySelector('.fa-search-location')
    
    WeatherFromAPI(GetLocalStorage());

    SearchButton.addEventListener('click', ()=>{
        SetLocalStorage(GetLocationFromInput());
        Main.innerHTML = '';
        WeatherFromAPI(GetLocalStorage());
    })
    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            SearchButton.click();
        }
    });

}

MainFunction();