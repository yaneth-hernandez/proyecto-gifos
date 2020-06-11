function precargaParametroUrl() {
    let valorParametro = window.location.search.split('=')[1]; //trae todas las variables de la url
    if (valorParametro == 'mis-gifos') {
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
    }
}
precargaParametroUrl();