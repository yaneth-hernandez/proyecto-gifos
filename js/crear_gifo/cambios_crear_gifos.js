function cambiarLinkArrowUrl() {
    let idActual = document.querySelector("#proceso-crear-gifos-id").firstElementChild.getAttribute('id')

    if (idActual == procesoCrearGifosId) {
        window.location = "http://127.0.0.1:5500/index.html";
    } else if (idActual == contenedorCapturaId) {
        retrocederComenzarGifos();
    }
}

function avanzarCapturarGifos() {
    let figureById = document.getElementById(procesoCrearGifosId);
    figureById.remove();
    seccionProcesoCrear.innerHTML = cuerpoCapturarGifos;
}

function retrocederComenzarGifos() {
    let figureById = document.getElementById(contenedorCapturaId);
    figureById.remove();
    seccionProcesoCrear.innerHTML = cuerpoComenzar;
}

function cambiarAreaCapturaVideo() {
    let figureById = document.getElementById(areaBotonesCaptura);
    figureById.remove();
    let divAreaBotonChequeo = document.getElementById(areaBotonesChequeo);
    divAreaBotonChequeo.className = 'area-botones-captura-gifo';
    divAreaBotonChequeo.innerHTML = botonesCapturarGifos;
}

function cambiarAreaVistaPrevia() {
    let divAreaBotonChequeo = document.getElementById(areaBotonesChequeo);
    divAreaBotonChequeo.className = 'area-vista-previa';
    divAreaBotonChequeo.innerHTML = botonesVistaPrevia;

}

function cambiarSubiendoGifos() {
    let figureContenedorCaptura = document.getElementById(contenedorCapturaId);
    figureContenedorCaptura.innerHTML = botonesSubiendoGifo;
}

function confirmacionGifo() {
    let figureContenedorCaptura = document.getElementById(contenedorCapturaId);
    figureContenedorCaptura.className = 'contenedor-gifo-subido';
    figureContenedorCaptura.innerHTML = gifoSubido;
}