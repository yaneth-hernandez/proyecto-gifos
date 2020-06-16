const dobleCero = "00";
var hours = `00`;
var minutes = `00`;
var seconds = `00`;

var temporizador = null;

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
    /*
    Seinvoca a la función que inicializa y va incrementando el contador de duración delvideo
     */
    iniciarConteo();
}

function cambiarAreaVistaPrevia() {
    let inputTemporizador = document.getElementById("input-timer-id");
    let totalTime = inputTemporizador.value;

    let divAreaBotonChequeo = document.getElementById(areaBotonesChequeo);
    divAreaBotonChequeo.className = 'area-vista-previa';
    divAreaBotonChequeo.innerHTML = botonesVistaPrevia;

    document.getElementById("input-timer-id").value = totalTime;
    /*
      Almacenamos la duracion del video 
    */
    document.getElementById('video').setAttribute("data-duration", totalTime);
}

function cambiarSubiendoGifos() {
    /*
        Muestra la ventana de Subiendo gifo...
    */
    let figureContenedorCaptura = document.getElementById(contenedorCapturaId);
    figureContenedorCaptura.innerHTML = botonesSubiendoGifo;
    /*
        Enviar por POST a la API de Giphy
    */
    enviarGifo();

}

function confirmacionGifo(urlMiGifo) {
    let figureContenedorCaptura = document.getElementById(contenedorCapturaId);
    figureContenedorCaptura.className = 'contenedor-gifo-subido';
    figureContenedorCaptura.innerHTML = gifoSubido;

    let imagenGifoSubido = document.getElementById("img-gifo-subido-id");
    imagenGifoSubido.src = urlMiGifo;
}

function chronometer() {
    seconds++;
    if (seconds < 10) {
        seconds = `0` + seconds;
    }
    if (seconds > 59) {
        seconds = dobleCero;
        minutes++;
        if (minutes < 10) {
            minutes = `0` + minutes;
        }
    }
    if (minutes > 59) {
        minutes = dobleCero;
        hours++;
        if (hours < 10) {
            hours = `0` + hours;
        }
    }
    let inputTemporizador = document.getElementById("input-timer-id");
    inputTemporizador.value = `${hours}:${minutes}:${seconds}`;
}

function iniciarConteo() {
    hours = dobleCero;
    minutes = dobleCero;
    seconds = dobleCero;
    let inputTemporizador = document.getElementById("input-timer-id");
    inputTemporizador.value = `${dobleCero}:${dobleCero}:${dobleCero}`;
    temporizador = setInterval(chronometer, 1000);
}

function detenerConteo() {
    clearInterval(temporizador);
}

function iniciarConteoVistaPrevia() {
    let dataDuration = document.getElementById('video').getAttribute("data-duration");
    document.getElementById("input-timer-id").value = dataDuration;

    var arregloValoresTiempo = dataDuration.split(":");
    hours = arregloValoresTiempo[0];
    minutes = arregloValoresTiempo[1];
    seconds = arregloValoresTiempo[2];
    temporizador = setInterval(chronometerRegresivo, 1000);
}

function chronometerRegresivo() {
    seconds--;
    if (seconds < 10) {
        seconds = `0` + seconds;
    }
    if (seconds == 0) {
        seconds = dobleCero;

        if (minutes >= 1) {
            minutes--;
            if (minutes < 10) {
                minutes = `0` + minutes;
            }
        }
    }

    let inputTemporizador = document.getElementById("input-timer-id");
    inputTemporizador.value = `${hours}:${minutes}:${seconds}`;
}