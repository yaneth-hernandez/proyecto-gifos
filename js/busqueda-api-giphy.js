let seccionSugerencias = 'SUGERENCIAS';
let seccionBuscar = 'BUSCAR';
let seccionTendencias = 'TENDENCIAS';
let seccionResultadoSugerido = 'RESULTADOS_SUGERIDOS';
let seccionMostrarGifos = 'MOSTRAR_GIFOS';
let seccionBotonSearch = 'BUSCAR_GIFOS';

function configuracionSearchUrl(qParametro, limit) {
    const protocolDomRecurso = 'https://api.giphy.com/v1/gifs/search?';
    const giphyApiKey = 'api_key=77oJazzoKbCJaoH8xkykG8dUOdeyy2FO';
    let qValorBusqueda = 'q=' + qParametro;
    let limitedObjetoRecibir = 'limit=' + limit;
    let offSetPosicionIResultado = 'offset=0';
    const casificacionEspecifica = 'rating=G';
    const lang = 'lang=es';
    const sperador = '&';

    let urlCompleta = protocolDomRecurso +
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

function buscarGifo(valorBusqueda, limit, nombreSeccion) {
    let urlBusqueda = configuracionSearchUrl(valorBusqueda, limit);
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
                cambiarSeccionListaSugerido(arregloResultadosGiphy);
            } else if (nombreSeccion == seccionMostrarGifos) {
                mostrarSeccionRestultadosBusqueda(arregloResultadosGiphy);
            } else if (nombreSeccion == seccionBotonSearch) {
                mostrarSeccionRestultadosBusqueda(arregloResultadosGiphy);
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
        downsized_large: {
            this.height = obj.images.original.height;
            this.size = obj.images.original.size;
            this.url = obj.images.original.url;
            this.width = obj.images.original.width;
        }
    }
}

function obtenerSugerencias() {
    let sugerencias = [
        'lord of the rings',
        'babyyoda',
        'godzilla',
        'comegalletas',
        'aplausos',
        'homerosimpson',
        'bruce lee',
        'the muppets',
        'friends',
        'adele',
        'the big bang theory',
        'bob esponja',
        'mr bean',
        'harry potter',
        'tom and jerry',
        'steve jobs',
        'the nanny',
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
    const maximoResultado = 4;
    let palabraSugerida = obtenerSugerencias();
    buscarGifo(palabraSugerida, maximoResultado, seccionSugerencias);
}

function cambiarSeccionSugerenciasHtml(objetoDatos) {
    document.getElementById("sugerido-gif0").src = objetoDatos[0].url;
    document.getElementById("sugerido-gif1").src = objetoDatos[1].url;
    document.getElementById("sugerido-gif2").src = objetoDatos[2].url;
    document.getElementById("sugerido-gif3").src = objetoDatos[3].url;
}

function cargarListaSugerida(inputTextoSugerido) {
    const maximoResultado = 3;
    buscarGifo(inputTextoSugerido, maximoResultado, seccionResultadoSugerido);

    if (inputTextoSugerido == "") {
        document.querySelector(".resultado-sugerido").style.visibility = "hidden";
    } else {
        document.querySelector(".resultado-sugerido").style.visibility = "visible";
    }
}

function cambiarSeccionListaSugerido(objetoDatos) {
    document.getElementById('sugerencia-text1').textContent = objetoDatos[0].title;
    document.getElementById('sugerencia-text2').textContent = objetoDatos[1].title;
    document.getElementById('sugerencia-text3').textContent = objetoDatos[2].title;
}

function clickListaSugerida(tituloGif) {
    //buscar gifo
    buscarGifo(tituloGif, 50, seccionMostrarGifos);
    //mostrar resultados, se debe llamar dentro de buscar 
    //recoger barra
    //mostrar botones sección resultado-lista
    //ocultar hoy te sugerimos
    //cambiar título: tendencias a título:resultados de búsqueda, dos puntos texto del span, del botón seleccionado
}

function mostrarSeccionRestultadosBusqueda(objetoDatos) {
    const contenidoSource = 'SOURCE_GIPHY';
    const datoIdGiphy = 'ID_GIPHY';

    const classGyfoStarndard = 'ver-gifo-small';
    const classGyfoLargo = 'ver-gifo-largo';


    let renderGifo = "<figure class='ver-gifo-standar'>";
    renderGifo = renderGifo + "<img class='ver-gifo-small' id='ID_GIPHY' src='SOURCE_GIPHY' alt='' srcset=''>";
    renderGifo = renderGifo + "<figcaption class='ver-gifo-text-standar'>";
    renderGifo = renderGifo + "#Lorem ipsum</figcaption></figure>";

    document.querySelector("#tend-ver-gifo").innerHTML = '';
    for (var i = 0; i < objetoDatos.length; i++) {
        let nuevoRenderGifo = renderGifo.replace(contenidoSource, objetoDatos[i].url)
            .replace(datoIdGiphy, objetoDatos[i].id);

        let finalRenderGifo = '';
        let ancho = parseInt(objetoDatos[i].width);
        if (ancho >= 588) {
            finalRenderGifo = nuevoRenderGifo.replace(classGyfoStarndard, classGyfoLargo);
        } else {
            finalRenderGifo = nuevoRenderGifo;
        }

        var figure = document.createElement('figure');
        figure.innerHTML = finalRenderGifo;

        document.querySelector("#tend-ver-gifo").appendChild(figure);
    }
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

function clickBotonBuscar(gifoBusqueda) {
    buscarGifo(gifoBusqueda, 30, seccionBotonSearch);
}

preCargarSugerencias();