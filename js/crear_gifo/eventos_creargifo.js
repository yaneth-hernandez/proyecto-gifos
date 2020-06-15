function precargaParametroUrl() {
    let valorParametro = window.location.search.split('=')[1]; //trae todas las variables de la url
    if (valorParametro == 'mis-gifos') {
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
    }
}

function eventoClickLinkArrow() {
    let linkArrow = document.getElementById('link-arrow-id');
    linkArrow.addEventListener('click', function() {
        cambiarLinkArrowUrl();
    });
}
window.addEventListener('load', eventoClickLinkArrow);

function clickBotonComenzar() {
    let botonComenzar = document.getElementById('btn-comenzar');
    botonComenzar.addEventListener('click', function() {
        avanzarCapturarGifos();
        getStreamAndRecord();
    });
}
window.addEventListener('load', clickBotonComenzar);




precargaParametroUrl();