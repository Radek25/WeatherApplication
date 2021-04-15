let Data = {
    Id : null,
    Location : null,
};

function GetLocationFromInput() {
    Data.Id = new Date().getTime();
    Data.Location = document.querySelector('input').value;
    return Data;
}