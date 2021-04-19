function GetLocalStorage() {
    let DataFromLocalStorage = localStorage.getItem(LSkey);
    if(DataFromLocalStorage){
        return JSON.parse(DataFromLocalStorage);
    }
    return [];
}