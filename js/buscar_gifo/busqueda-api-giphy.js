const seccionSugerencias = 'SUGERENCIAS';
const seccionBuscar = 'BUSCAR';
const seccionTendencias = 'TENDENCIAS';
const seccionResultadoSugerido = 'RESULTADOS_SUGERIDOS';
const seccionMostrarGifos = 'MOSTRAR_GIFOS';
const seccionBotonSearch = 'BUSCAR_GIFOS';
const seccionBotoneraBuscar = 'BOTONERA_BUSCAR';
const seccionVerMas = 'VER_MAS_GIFOS';
const precargaMostrarGifos = 'PRECARGA_MOSTRAR_GIFOS';
const prefijoTituloResultadoBusqueda = 'Resultado de Búsqueda: ';
const searchUrl = 'search';
const trendingUrl = 'trending';

//defino la url, configurandola, dejando los parametros 
function configuracionUrl(qParametro, limit, tipo) {
    const protocolDomRecurso = 'https://api.giphy.com/v1/gifs/';
    const giphyApiKey = 'api_key=77oJazzoKbCJaoH8xkykG8dUOdeyy2FO';
    let qValorBusqueda = 'q=' + qParametro;
    let limitedObjetoRecibir = 'limit=' + limit;
    let offSetPosicionIResultado = 'offset=0';
    const casificacionEspecifica = 'rating=G';
    const lang = 'lang=es';
    const sperador = '&';

    let urlCompleta = protocolDomRecurso +
        tipo + '?' +
        giphyApiKey +
        sperador +
        qValorBusqueda +
        sperador +
        limitedObjetoRecibir +
        sperador +
        offSetPosicionIResultado +
        sperador +
        casificacionEspecifica +
        sperador +
        lang;

    return urlCompleta;
}

async function buscarGifo(valorBusqueda, limit, nombreSeccion, tipo) {

    let existeGifo = false;
    let urlBusqueda = configuracionUrl(valorBusqueda, limit, tipo);
    var respuestaBusqueda = await fetch(urlBusqueda);
    var resultadoDatos = await respuestaBusqueda.json();

    var arregloResultadosGiphy = [];
    resultadoDatos.data.forEach(result => {
        var objectResult = new GiphyClass(result);
        arregloResultadosGiphy.push(objectResult);
    })
    if (resultadoDatos.data.length != 0) {
        existeGifo = true;
        if (nombreSeccion == seccionSugerencias) {
            cambiarSeccionSugerenciasHtml(arregloResultadosGiphy);
        } else if (nombreSeccion == seccionResultadoSugerido) {
            await cambiarSeccionListaSugeridoHtml(arregloResultadosGiphy);
        } else if (nombreSeccion == precargaMostrarGifos) {
            cargarSeccionRestultadosBusquedaHtml(arregloResultadosGiphy);
        } else if (nombreSeccion == seccionVerMas) {
            cargarSeccionRestultadosBusquedaHtml(arregloResultadosGiphy);
        } else if (nombreSeccion == seccionMostrarGifos ||
            nombreSeccion == seccionBotonSearch) {
            mostraOcultarBotonesResultListCambioHtml(arregloResultadosGiphy);
            ocultarSeccionSugerenciasCambioHtml();
            cargarSeccionRestultadosBusquedaHtml(arregloResultadosGiphy);
        } else if (nombreSeccion == seccionBotoneraBuscar) {
            cargarSeccionRestultadosBusquedaHtml(arregloResultadosGiphy);
        }
    }
    return existeGifo;
}

class GiphyClass {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.bitlyUrl = obj.bitly_url;
        this.height = obj.images.original.height;
        this.size = obj.images.original.size;
        this.url = obj.images.original.url;
        this.width = obj.images.original.width;
    }
}

function obtenerSugerencias() {
    let sugerencias = [
        'lord of the rings',
        'babyyoda',
        'comegalletas',
        'aplausos',
        'homerosimpson',
        'bruce lee',
        'the muppets',
        'friends',
        'sailor moon',
        'adele',
        'the big bang theory',
        'bob esponja',
        'mr bean',
        'harry potter',
        'tom and jerry',
        'steve jobs',
        'the nanny',
        'gordon ramsay',
        'titanic jack',
        'bugs bunny',
        'star wars',
        'cats',
        'game of throne',
        'what?'
    ];
    let posicion = Math.floor(Math.random() * sugerencias.length);

    return sugerencias[posicion];
}

function preCargarSugerencias() {
    const maximoResultado = 4;
    let palabraSugerida = obtenerSugerencias();
    buscarGifo(palabraSugerida, maximoResultado, seccionSugerencias, searchUrl);
}

//búsqueda con botón ver más
function clickVerMasGifos(botonVerMasId) {
    var title = '';
    if (botonVerMasId == "btn-opt-id0") {
        title = document.getElementById('hashtags0-id').getAttribute("data-titulo");
    } else if (botonVerMasId == "btn-opt-id1") {
        title = document.getElementById('hashtags1-id').getAttribute("data-titulo");
    } else if (botonVerMasId == "btn-opt-id2") {
        title = document.getElementById('hashtags2-id').getAttribute("data-titulo");
    } else if (botonVerMasId == "btn-opt-id3") {
        title = document.getElementById('hashtags3-id').getAttribute("data-titulo");
    }
    var tituloBusqueda = prefijoTituloResultadoBusqueda + title;
    buscarGifo(title, 50, seccionVerMas, searchUrl);
    cambiarTituloPostBusqueda(tituloBusqueda);
}

async function cargarListaSugerida(inputTextoSugerido) {
    const maximoResultado = 3;

    if (inputTextoSugerido == "") {
        mostrarOcultarListaSugerida(false);
    } else {
        let existeGifo = await buscarGifo(inputTextoSugerido, maximoResultado, seccionResultadoSugerido, searchUrl);
        mostrarOcultarListaSugerida(existeGifo);
    }
}

function mostrarOcultarListaSugerida(mostrar) {
    if (mostrar == true) {
        document.querySelector(".resultado-sugerido").style.visibility = "visible";
    } else {
        document.querySelector(".resultado-sugerido").style.visibility = "hidden";
    }
}

function clickListaSugerida(tituloGif) {
    let tituloCompleto = prefijoTituloResultadoBusqueda + tituloGif;
    mostrarOcultarListaSugerida(false);
    buscarGifo(tituloGif, 50, seccionMostrarGifos, searchUrl);
    cambiarTituloPostBusqueda(tituloCompleto);
}

function cambiarTituloPostBusqueda(titulo) {
    document.querySelector("#tendencias-titulo-id").textContent = titulo;
}

function obtenerThemeActual() {
    let obtenerTemaCss = localStorage.getItem(nombreIndexCss);
    return obtenerTemaCss;
}

function activarBotonBusqueda(inputActivarBoton) {
    let valorTheme = obtenerThemeActual();

    if (inputActivarBoton == '') {

        if (valorTheme == './css/style.css') {
            document.querySelector("#btn-search-id").className = 'btn-search';
            document.querySelector("#estilo-lupa-id").src = 'img/lupa_inactive.svg';
        } else {
            document.querySelector("#btn-search-id").className = 'btn-search';
            document.querySelector("#estilo-lupa-id").src = 'img/combined_shape.svg';
        }

    } else {
        if (valorTheme == './css/style.css') {

            document.querySelector("#btn-search-id").className = 'btn-search-click';
            document.querySelector("#estilo-lupa-id").src = 'img/lupa.svg';
        } else {
            document.querySelector("#btn-search-id").className = 'btn-search-click';
            document.querySelector("#estilo-lupa-id").src = 'img/lupa_light.svg';
        }
    }
}


function clickBotonBuscar(textoDeBusqueda) {
    if (textoDeBusqueda != null && textoDeBusqueda != "") {
        let tituloCompleto = prefijoTituloResultadoBusqueda + textoDeBusqueda;
        buscarGifo(textoDeBusqueda, 50, seccionBotonSearch, searchUrl);
        mostrarOcultarListaSugerida(false);
        cambiarTituloPostBusqueda(tituloCompleto);
    }
}

function preCargarTrending() {
    buscarGifo('', 50, precargaMostrarGifos, trendingUrl);
}

function textoBusquedaOculto(idBotonListaSugerida) {
    let busquedatextoOculto = document.querySelector("#" + idBotonListaSugerida).childNodes[1].textContent;
    buscarGifo(busquedatextoOculto, 50, seccionBotoneraBuscar, searchUrl);

}
preCargarSugerencias();

preCargarTrending();