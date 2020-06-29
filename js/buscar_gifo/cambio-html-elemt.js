function cambiarSeccionSugerenciasHtml(objetoDatos) {
    document.getElementById("sugerido-gif0").src = objetoDatos[0].url;
    document.getElementById("sugerido-gif1").src = objetoDatos[1].url;
    document.getElementById("sugerido-gif2").src = objetoDatos[2].url;
    document.getElementById("sugerido-gif3").src = objetoDatos[3].url;
    document.getElementById("hashtags0-id").textContent = objetoDatos[0].title;
    document.getElementById("hashtags1-id").textContent = objetoDatos[1].title;
    document.getElementById("hashtags2-id").textContent = objetoDatos[2].title;
    document.getElementById("hashtags3-id").textContent = objetoDatos[3].title;

}

async function cambiarSeccionListaSugeridoHtml(objetoDatos) {
    if (objetoDatos != null && objetoDatos != undefined) {
        document.getElementById('sugerencia-text1').textContent = objetoDatos[0].title;
        document.getElementById('sugerencia-text2').textContent = objetoDatos[1].title;
        document.getElementById('sugerencia-text3').textContent = objetoDatos[2].title;
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
    renderGifo = renderGifo + "<figcaption class='ver-gifo-text-standar'>";
    renderGifo = renderGifo + "'HASHTAG_GIPHY'</figcaption>";
    renderGifo = renderGifo + "</a>";
    document.querySelector("#tend-ver-gifo").innerHTML = '';
    for (var i = 0; i < objetoDatos.length; i++) {
        let nuevoRenderGifo = renderGifo.replace(contenidoSource, objetoDatos[i].url)
            .replace(datoIdGiphy, objetoDatos[i].id)
            .replace(hashTag, objetoDatos[i].title)
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
    for (var i = 0; i <= 7; i++) {
        let idName = "#boton-result-list" + i;
        document.querySelector(idName).childNodes[0].textContent = prepararPlalabras(objetoDatos[i].title);
        document.querySelector(idName).childNodes[1].textContent = objetoDatos[i].title;
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