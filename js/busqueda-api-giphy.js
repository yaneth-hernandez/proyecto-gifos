let seccionSugerencias = 'SUGERENCIAS';
let seccionBuscar = 'BUSCAR';
let seccionTendencias = 'TENDENCIAS';

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
        downsized_large: {
            this.height = obj.images.downsized_large.height;
            this.size = obj.images.downsized_large.size;
            this.url = obj.images.downsized_large.url;
            this.width = obj.images.downsized_large.width;
        }
        downsized_small: {
            this.height = obj.images.downsized_small.height;
            this.mp4 = obj.images.downsized_small.mp4;
            this.mp4_size = obj.images.downsized_small.mp4_size;
            this.width = obj.images.downsized_small.mp4_width;
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
        'dance moms',
        'adele',
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
    let valor = objetoDatos;
    document.querySelector("#sugerido-gif0").src = objetoDatos[0].url;
    document.querySelector("#sugerido-gif1").src = objetoDatos[1].url;
    document.querySelector("#sugerido-gif2").src = objetoDatos[2].url;
    document.querySelector("#sugerido-gif3").src = objetoDatos[3].url;
}

preCargarSugerencias();