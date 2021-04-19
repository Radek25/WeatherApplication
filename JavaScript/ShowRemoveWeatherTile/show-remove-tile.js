function ShowRemoveTail() {
    let IsDisplayNoneBool = true;
    let RemoveButton = document.querySelector('.fa-trash');
    let RemoveTile = document.getElementsByClassName('remove-tile');
    RemoveButton.addEventListener('click', ()=>{
        if (IsDisplayNoneBool === true) {
            for (let index = 0; index < RemoveTile.length; index++) {
                RemoveTile[index].style.display = 'flex';
            }
            IsDisplayNoneBool = !IsDisplayNoneBool;
        } else {
            for (let index = 0; index < RemoveTile.length; index++) {
                RemoveTile[index].style.display = 'none';
            }
            IsDisplayNoneBool = !IsDisplayNoneBool;
        }
    })
}
