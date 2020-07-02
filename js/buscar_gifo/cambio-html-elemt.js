function cambiarSeccionSugerenciasHtml(objetoDatos) {
    const sugeridoGif = 'sugerido-gif';
    const tituloHash = 'hashtags';

    for (let i = 0; i <= 3; i++) {
        let sugeridoGifIterador = sugeridoGif + i;
        document.getElementById(sugeridoGifIterador).src = objetoDatos[i].url;
        let sugeridoTituloIterador = tituloHash + i + '-id';
        document.getElementById(sugeridoTituloIterador).textContent = prepararPlalabras(objetoDatos[i].title);
        document.getElementById(sugeridoTituloIterador).setAttribute("data-titulo", objetoDatos[i].title);
    }
}

async function cambiarSeccionListaSugeridoHtml(objetoDatos) {
    if (objetoDatos != null && objetoDatos != undefined) {
        for (let i = 0; i < objetoDatos.length; i++) {
            document.getElementById('sugerencia-text' + i).textContent = objetoDatos[i].title;
        }
    }
}

function cargarSeccionRestultadosBusquedaHtml(objetoDatos) {
    const contenidoSource = 'SOURCE_GIPHY';
    const datoIdGiphy = 'ID_GIPHY';
    const hashTag = 'HASHTAG_GIPHY';
    const urlShort = 'BITLY_URL';
    const classGyfoStarndard = 'ver-gifo-small';
    const classGyfoLargo = 'ver-gifo-largo';

    let renderGifo = "<a href='BITLY_URL' target='_blank'>";
    renderGifo = renderGifo + "<img class='ver-gifo-small' id='ID_GIPHY' src='SOURCE_GIPHY' alt='' srcset=''>";
    renderGifo = renderGifo + "<figcaption  class='ver-gifo-text-standar'>";
    renderGifo = renderGifo + "'HASHTAG_GIPHY'</figcaption>";
    renderGifo = renderGifo + "</a>";
    document.querySelector("#tend-ver-gifo").innerHTML = '';
    for (var i = 0; i < objetoDatos.length; i++) {
        let nuevoRenderGifo = renderGifo.replace(contenidoSource, objetoDatos[i].url)
            .replace(datoIdGiphy, objetoDatos[i].id)
            .replace(hashTag, prepararPlalabras(objetoDatos[i].title))
            .replace(urlShort, objetoDatos[i].bitlyUrl); //enviar busqueda a pagina de giphy

        let finalRenderGifo = '';
        let ancho = (objetoDatos[i].width / objetoDatos[i].height);
        var figure = document.createElement('figure');
        if (ancho >= 1.5) {
            finalRenderGifo = nuevoRenderGifo.replace(classGyfoStarndard, classGyfoLargo)
                .replace('ver-gifo-text-standar', 'ver-gifo-text-largo');
            figure.className = 'contenedor-gifo-largo';

        } else {
            finalRenderGifo = nuevoRenderGifo;
            figure.className = 'contenedor-gifo-standar';
        }
        figure.innerHTML = finalRenderGifo;

        document.querySelector("#tend-ver-gifo").append(figure);
    }

}
//botones resultados -cambio mostrar
function mostraOcultarBotonesResultListCambioHtml(objetoDatos) {
    const botongResultPrefijoId = "#boton-result-list";
    for (let i = 0; i <= 7; i++) {
        let idName = botongResultPrefijoId + i;
        let botonResultListElement = document.querySelector(idName);
        botonResultListElement.style.visibility = "hidden";
    }
    for (let i = 0; i < objetoDatos.length && i <= 7; i++) {
        let idName = botongResultPrefijoId + i;
        let botonResultListElement = document.querySelector(idName);
        botonResultListElement.childNodes[0].textContent = prepararPlalabras(objetoDatos[i].title);
        botonResultListElement.childNodes[1].textContent = objetoDatos[i].title;
        botonResultListElement.style.visibility = "visible";
    }
    document.querySelector('#menu-results-list-id').style.visibility = "visible";
}

function prepararPlalabras(frase) {
    let textoProcesado = '#';
    let arrayPreprocesado = frase.split(' ');
    let logitudArreglo = arrayPreprocesado.length;

    if (frase.length > 0 && frase != null) {
        if (logitudArreglo > 0) {
            textoProcesado = textoProcesado + arrayPreprocesado[0];
        }
        if (logitudArreglo >= 2) {
            textoProcesado = textoProcesado + ' ' + arrayPreprocesado[1];
        }
    }
    return textoProcesado;
}

function ocultarSeccionSugerenciasCambioHtml() {
    let seccionSugerencias = document.getElementsByClassName('seccion-sugerencias')[0];
    let tituloSugerimos = document.getElementsByClassName('sugerimos')[0];

    if (seccionSugerencias != null && tituloSugerimos != null) {
        seccionSugerencias.classList.replace('seccion-sugerencias', 'ocultar-seccion-sugerencias');
        tituloSugerimos.classList.replace('sugerimos', 'sugerimos-replace');
    }
}