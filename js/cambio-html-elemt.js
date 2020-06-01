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

function cambiarSeccionListaSugeridoHtml(objetoDatos) {
    document.getElementById('sugerencia-text1').textContent = objetoDatos[0].title;
    document.getElementById('sugerencia-text2').textContent = objetoDatos[1].title;
    document.getElementById('sugerencia-text3').textContent = objetoDatos[2].title;
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
    renderGifo = renderGifo + "</a>"
    renderGifo = renderGifo + "<figcaption class='ver-gifo-text-standar'>";
    renderGifo = renderGifo + "'HASHTAG_GIPHY'</figcaption>";

    document.querySelector("#tend-ver-gifo").innerHTML = '';
    for (var i = 0; i < objetoDatos.length; i++) {
        let nuevoRenderGifo = renderGifo.replace(contenidoSource, objetoDatos[i].url)
            .replace(datoIdGiphy, objetoDatos[i].id)
            .replace(hashTag, objetoDatos[i].title)
            .replace(urlShort, objetoDatos[i].bitlyUrl);

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