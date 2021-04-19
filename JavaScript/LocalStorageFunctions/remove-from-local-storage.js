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