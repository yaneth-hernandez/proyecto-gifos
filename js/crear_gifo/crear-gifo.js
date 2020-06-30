var recorderGif = null;
var recorderVideo = null;
var streamCapturaUserMedia = null;
var contenidoArchivoGif = null;
var cancelarPeticionPost = null;


async function iniciarCamara() {
    streamCapturaUserMedia = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: { max: 832 },
            height: { max: 440 }
        }
    });
    video.srcObject = streamCapturaUserMedia;
    video.play();
}
async function detenerCamara() {
    //detengo càmara
    if (streamCapturaUserMedia != null) {
        streamCapturaUserMedia.getTracks().forEach(track => {
            track.stop();
        });
        streamCapturaUserMedia = null;
    }

    //detengo grabación
    if (recorderVideo != null) {
        await recorderVideo.stopRecording();
        await recorderVideo.reset();
        await recorderVideo.destroy();
        recorderVideo = null;
    }

    if (recorderGif != null) {
        await recorderGif.stopRecording();
        await recorderGif.reset();
        await recorderGif.destroy();
        recorderGif = null;
    }
}

async function iniciarGrabacion() {
    try {
        recorderGif = new RecordRTCPromisesHandler(streamCapturaUserMedia, {
            type: "gif"
        });
        await recorderGif.startRecording();

        recorderVideo = new RecordRTCPromisesHandler(streamCapturaUserMedia, {
            type: "video"
        });
        await recorderVideo.startRecording();
    } catch (err) {
        console.log('Error al iniciar grabación' + err)
    }
}

async function detenerGrabacion() {
    try {
        document.getElementById('video').srcObject = null;
        await recorderVideo.stopRecording();
        let blob = await recorderVideo.getBlob();

        await recorderGif.stopRecording();
        contenidoArchivoGif = await recorderGif.getBlob();
        streamCapturaUserMedia.getTracks().forEach(track => {
            track.stop();
        });
        await recorderVideo.reset();
        await recorderVideo.destroy();
        recorderVideo = null;
        await recorderGif.reset();
        await recorderGif.destroy();
        recorderGif = null;
        streamCapturaUserMedia = null;
        document.getElementById('video').src = URL.createObjectURL(blob);
    } catch (err) {
        console.log('No se puede detener la grabación' + err)
    }
}

function playVistaPrevia() {
    document.getElementById('video').play();
    iniciarConteoVistaPrevia();
}

function configuracionUrlCrear() {
    const protocolDomRecurso = 'https://upload.giphy.com/v1/gifs';
    const giphyApiKey = 'api_key=77oJazzoKbCJaoH8xkykG8dUOdeyy2FO';
    let urlCompleta = protocolDomRecurso +
        '?' +
        giphyApiKey;
    return urlCompleta;
}


function configuracionUrlBuscarPorId(id) {
    const protocolDomRecurso = 'https://api.giphy.com/v1/gifs/';
    const giphyApiKey = 'api_key=77oJazzoKbCJaoH8xkykG8dUOdeyy2FO';
    let urlCompleta = protocolDomRecurso +
        id +
        "?" +
        giphyApiKey;
    return urlCompleta;
}

async function enviarGifo() {
    let formUpload = new FormData();
    formUpload.append('file', contenidoArchivoGif, 'myGif.gif');
    let urlUpload = configuracionUrlCrear();
    const heading = new Headers();
    cancelarPeticionPost = new AbortController();
    try {
        let requestIni = {
            method: "POST",
            headers: heading,
            body: formUpload,
            cors: "cors",
            signal: cancelarPeticionPost.signal
        };
        let respuestaUpload = await fetch(urlUpload, requestIni);
        let respuestaJson = await respuestaUpload.json();
        let urlReturn = await retornarUrlGifoPorId(respuestaJson.data.id);
        confirmacionGifo(urlReturn);
        guardarId(respuestaJson.data.id);
    } catch (error) {
        console.log(error);

    }
}

async function retornarUrlGifoPorId(id) {
    let urlBuscar = configuracionUrlBuscarPorId(id);
    let respuestaBuscar = await fetch(urlBuscar);
    let respuestaJson = await respuestaBuscar.json();
    let urlMiGifo = respuestaJson.data.images.original.url;
    return urlMiGifo;
}

function guardarId(id) {
    let nombreKey = "miGifo-" + id;
    localStorage.setItem(nombreKey, id);
}

function obtenerEnlaceImgGifo() {
    let enlaceGifo = document.querySelector('#img-gifo-subido-id');
    let copiaEnlace = document.createElement("input");
    copiaEnlace.setAttribute("value", enlaceGifo.src);
    document.body.appendChild(copiaEnlace);
    copiaEnlace.select();
    document.execCommand("copy");
    document.body.removeChild(copiaEnlace);

}

function descargaImagen() {

    var source = document.querySelector('#img-gifo-subido-id').src;
    fetch(source)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const nuevoEnlace = document.createElement('a');
            nuevoEnlace.style.display = 'none';
            nuevoEnlace.href = url;
            nuevoEnlace.download = 'guifo-img.gif';
            document.body.appendChild(nuevoEnlace);
            nuevoEnlace.click();
            window.URL.revokeObjectURL(url);
            alert('Archivo descargado con éxito!!');
        })
        .catch(() => alert('No se pudo descargar su gif'));

}