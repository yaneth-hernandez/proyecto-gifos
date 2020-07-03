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
    const classGyfoStandard = 'ver-gifo-small';
    const classGyfoLargo = 'ver-gifo-largo';
    const verGifoTextStandar = 'ver-gifo-text-standar';
    const verGifoTextLargo = 'ver-gifo-text-largo';

    document.querySelector("#tend-ver-gifo").innerHTML = '';
    for (var i = 0; i < objetoDatos.length; i++) {
            let hasTagtext = prepararPlalabras(objetoDatos[i].title);
            let renderGifo = `<a href='` + objetoDatos[i].bitlyUrl  + `' target='_blank'>`
                            + `<img class='ver-gifo-small' id='` + objetoDatos[i].id +`' src='` + objetoDatos[i].url + `' alt='' srcset=''>`
                            + `<figcaption class='ver-gifo-text-standar'>'` + hasTagtext + `'</figcaption>`+
                            `</a>`;

        var figure = document.createElement('figure');
        if (objetoDatos[i].isLarge) {
            renderGifo = renderGifo.replace(classGyfoStandard, classGyfoLargo)
                                    .replace(verGifoTextStandar, verGifoTextLargo);
            figure.className = 'contenedor-gifo-largo';
        } else {
            figure.className = 'contenedor-gifo-standar';
        }
        figure.innerHTML = renderGifo;
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