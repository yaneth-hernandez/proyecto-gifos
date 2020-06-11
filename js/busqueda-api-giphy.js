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
};

function buscarGifo(valorBusqueda, limit, nombreSeccion, tipo) {
    let urlBusqueda = configuracionUrl(valorBusqueda, limit, tipo);
    let resultadoBusqueda =
        fetch(urlBusqueda)
        .then(response => response.json())
        .then(resultJson => {
            var arregloResultadosGiphy = [];
            resultJson.data.forEach(result => {
                var objectResult = new GiphyClass(result);
                arregloResultadosGiphy.push(objectResult);
            })
            if (nombreSeccion == seccionSugerencias) {
                cambiarSeccionSugerenciasHtml(arregloResultadosGiphy);
            } else if (nombreSeccion == seccionResultadoSugerido) {
                cambiarSeccionListaSugeridoHtml(arregloResultadosGiphy);
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
        })
        .catch((error) => {
            return error
        })
    return resultadoBusqueda;
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
        'godzilla',
        'comegalletas',
        'aplausos',
        'jocker',
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
        'what?',
        'jonathan van ness'
    ];
    let posicion = Math.floor(Math.random() * sugerencias.length);

    return sugerencias[posicion];
}

function preCargarSugerencias() {
    const maximoResultado = 8;
    let palabraSugerida = obtenerSugerencias();
    buscarGifo(palabraSugerida, maximoResultado, seccionSugerencias, searchUrl);
}

//búsqueda con botón ver más
function clickVerMasGifos(botonVerMasId) {

    var title = '';
    if (botonVerMasId == "btn-opt-id0") {
        title = document.getElementById("hashtags0-id").textContent;
    } else if (botonVerMasId == "btn-opt-id1") {
        title = document.getElementById("hashtags1-id").textContent;
    } else if (botonVerMasId == "btn-opt-id2") {
        title = document.getElementById("hashtags2-id").textContent;
    } else if (botonVerMasId == "btn-opt-id3") {
        title = document.getElementById("hashtags3-id").textContent;
    }
    var tituloBusqueda = prefijoTituloResultadoBusqueda + title;
    buscarGifo(title, 100, seccionVerMas, searchUrl);
    cambiarTituloPostBusqueda(tituloBusqueda);
}

function cargarListaSugerida(inputTextoSugerido) {
    const maximoResultado = 3;
    buscarGifo(inputTextoSugerido, maximoResultado, seccionResultadoSugerido, searchUrl);

    if (inputTextoSugerido == "") {
        mostrarOcultarListaSugerida(false);
    } else {
        mostrarOcultarListaSugerida(true);
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

function activarBotonBusqueda(inputActivarBoton) {
    if (inputActivarBoton == '') {
        document.querySelector("#btn-search-id").className = 'btn-search';
        document.querySelector("#estilo-lupa-id").src = 'img/lupa_inactive.svg';
    } else {
        document.querySelector("#btn-search-id").className = 'btn-search-active';
        document.querySelector("#estilo-lupa-id").src = 'img/lupa.svg';
    }
}

function clickBotonBuscar(textoDeBusqueda) {
    let tituloCompleto = prefijoTituloResultadoBusqueda + textoDeBusqueda;
    buscarGifo(textoDeBusqueda, 80, seccionBotonSearch, searchUrl);
    mostrarOcultarListaSugerida(false);
    cambiarTituloPostBusqueda(tituloCompleto);

}

function preCargarTrending() {
    buscarGifo('', 80, precargaMostrarGifos, trendingUrl);
}

preCargarSugerencias();

preCargarTrending();

//falta:
//anclar logo para retorno al index
//agregar evento para que aparezca barra hashtag al pasar el mouse
//ocultar sección hoy te sugerimos al iniciar la búsqueda
//mostrar botones con resultados de búsqueda
//mostrar búsqueda por botones