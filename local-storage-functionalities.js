const LSkey = 'Weather';

function SetLocalStorage(DataFromInput) {
    localStorage.setItem(LSkey, JSON.stringify(DataFromInput));
}

function GetLocalStorage() {
    let DataFromLocalStorage = localStorage.getItem(LSkey);
    if(DataFromLocalStorage){
        return JSON.parse(DataFromLocalStorage);
    }
    return [];
}