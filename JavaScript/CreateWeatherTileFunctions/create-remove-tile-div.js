function CreateRemoveTileDiv(WeatherTile) {
    const RemoveTile = document.createElement('div');
    RemoveTile.classList.add('remove-tile');
    RemoveTile.innerHTML = '<i class="fas fa-trash"></i>';
    WeatherTile.appendChild(RemoveTile);

    RemoveTile.addEventListener('click', ()=>{
        WeatherTile.remove();
        RemoveFromLocalStorage(WeatherTile.id);
    })
}