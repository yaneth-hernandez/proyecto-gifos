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

async function iniciarGrabacion() {
    recorderGif = new RecordRTCPromisesHandler(streamCapturaUserMedia, {
        type: "gif"
    });
    await recorderGif.startRecording();

    recorderVideo = new RecordRTCPromisesHandler(streamCapturaUserMedia, {
        type: "video"
    });
    await recorderVideo.startRecording();
}

async function detenerGrabacion() {
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
};


function configuracionUrlBuscarPorId(id) {
    const protocolDomRecurso = 'https://api.giphy.com/v1/gifs/';
    const giphyApiKey = 'api_key=77oJazzoKbCJaoH8xkykG8dUOdeyy2FO';
    let urlCompleta = protocolDomRecurso +
        id +
        "?" +
        giphyApiKey;
    return urlCompleta;
};

async function enviarGifo() {
    let formUpload = new FormData();
    formUpload.append('file', contenidoArchivoGif, 'myGif.gif');
    let urlUpload = configuracionUrlCrear();
    const heading = new Headers();
    cancelarPeticionPost = new AbortController();

    let requestIni = {
        method: "POST",
        headers: heading,
        body: formUpload,
        cors: "cors",
        signal: cancelarPeticionPost.signal
    };

    let respuestaUpload = await fetch(urlUpload, requestIni);
    let respuestaJson = await respuestaUpload.json();

    await buscarPorId(respuestaJson.data.id);
    guardarId(respuestaJson.data.id);
}

function guardarId(id) {
    let nombreKey = "miGifo-" + id;
    localStorage.setItem(nombreKey, id);
}

async function buscarPorId(id) {
    let urlBuscar = configuracionUrlBuscarPorId(id);
    let respuestaBuscar = await fetch(urlBuscar);
    let respuestaJson = await respuestaBuscar.json();
    let urlMiGifo = respuestaJson.data.images.original.url;

    confirmacionGifo(urlMiGifo);
}

//llamar con await. ejemplo:   await retornarGifoPorId("DGFDF5x34");
async function retornarGifoPorId(id) {
    let urlBuscar = configuracionUrlBuscarPorId(id);
    let respuestaBuscar = await fetch(urlBuscar);
    let respuestaJson = await respuestaBuscar.json();
    let urlMiGifo = respuestaJson.data.images.original.url;
    return urlMiGifo;
}