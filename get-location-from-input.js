let DataArray = [];

let Data = {
    Id : null,
    Location : null,
};

function GetLocationFromInput() {
    Data.Id = new Date().getTime();
    Data.Location = document.querySelector('input').value;
    DataArray.push(JSON.parse(JSON.stringify(Data)));
    return DataArray;
}