const LSkey = 'Weather';
function SetLocalStorage(DataFromInput) {
    let LocationArray = [];
    LocationArray = JSON.parse(localStorage.getItem(LSkey)) || [];
    LocationArray.push(DataFromInput);
    localStorage.setItem(LSkey, JSON.stringify(LocationArray));
}