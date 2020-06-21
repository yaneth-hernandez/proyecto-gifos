//obtiene parámetro de la url y valida si es mis gifos y crear gifos
async function precargaParametroUrl() {
    let valorParametro = window.location.search.split('=')[1]; //trae todas las variables de la url
    if (valorParametro == 'mis-gifos') {
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
        await obtenerGifosCreados();
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
        iniciarCamara();
    });
}
window.addEventListener('load', clickBotonComenzar);

function eventoClickMisGifos() {
    let misGifos = document.getElementById('text-id');
    misGifos.addEventListener('click', function(e) {
        e.preventDefault();
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
        obtenerGifosCreados();
    })
}
window.addEventListener('load', eventoClickMisGifos);


precargaParametroUrl();