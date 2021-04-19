const LSkey = 'Weather';

function SetLocalStorage(DataFromInput) {
    let LocationArray = [];
    LocationArray = JSON.parse(localStorage.getItem(LSkey)) || [];
    LocationArray.push(DataFromInput);
    localStorage.setItem(LSkey, JSON.stringify(LocationArray));
}

function GetLocalStorage() {
    let DataFromLocalStorage = localStorage.getItem(LSkey);
    if(DataFromLocalStorage){
        return JSON.parse(DataFromLocalStorage);
    }
    return [];
}

function RemoveFromLocalStorage(WeatherTileID) {
    let RemoveArray = [];
    RemoveArray.push(...GetLocalStorage());
    for (let index = 0; index < RemoveArray.length; index++) {
        if (WeatherTileID == RemoveArray[index].Id) {
            RemoveArray.splice(index,1);
        }
    }
    localStorage.removeItem(LSkey);
    localStorage.setItem(LSkey, JSON.stringify(RemoveArray));
}