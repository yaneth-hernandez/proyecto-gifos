//inicialización de funciones
const opcionIndex = 'index';
const opcionCrear = 'crear';

const nombreIndexCss = 'indexCssKey';
const nombreCrearCss = 'crearCssKey';
const nombreLogo = 'logoKey';
const nombreLupa = 'lupaKey'

recuperarEstilo(location.pathname);

//página principal
function themeButtonDopdown() {
    var objectSelector = document.querySelector("#contenedor-menu").style.visibility;
    if (objectSelector == "" || objectSelector == "hidden") {
        document.querySelector("#contenedor-menu").style.visibility = "visible";
    } else {
        document.querySelector("#contenedor-menu").style.visibility = "hidden";
    }
}


function guardarEstilo(nombreKey, valor) {
    localStorage.removeItem(nombreKey);
    localStorage.setItem(nombreKey, valor);
}

function recuperarEstilo(origenPagina) {
    var recuperarTemaCss;
    var recuperarTemaLogo;
    var recuperarLupa;

    recuperarTemaLogo = localStorage.getItem(nombreLogo);
    if (origenPagina == "/index.html") {
        recuperarTemaCss = localStorage.getItem(nombreIndexCss);
        if (recuperarTemaCss != null && recuperarTemaLogo != null && recuperarLupa != null) {
            document.querySelector("#style-theme-rel").href = recuperarTemaCss;
            document.querySelector("#header-logo").src = recuperarTemaLogo;
            document.querySelector("#estilo-lupa-id").src = recuperarLupa;
        }
    } else if (origenPagina == "/index-crear-gifo.html") {
        recuperarTemaCss = localStorage.getItem(nombreCrearCss);
        if (recuperarTemaCss != null && recuperarTemaLogo != null) {
            document.querySelector("#style-theme-crear-gifo").href = recuperarTemaCss;
            document.querySelector("#header-logo-arrow").src = recuperarTemaLogo;
        }
    }
}

function themeSailorNight(esIndexOCrear) {
    const valorIndexCss = "/css/style-theme2.css";
    const valorCrearCss = "css/stylecreargifo-theme2.css";
    const valorLogo = "img/gifOF_logo_dark.png";
    const valorLupa = "img/combined_shape.svg";


    if (esIndexOCrear == opcionIndex) {
        document.querySelector("#style-theme-rel").href = valorIndexCss;
        document.querySelector("#header-logo").src = valorLogo;
        document.querySelector("#estilo-lupa-id").src = valorLupa;
    } else if (esIndexOCrear == opcionCrear) {
        document.querySelector("#style-theme-crear-gifo").href = valorCrearCss;
        document.querySelector("#header-logo-arrow").src = valorLogo;
    }
    guardarEstilo(nombreIndexCss, valorIndexCss);
    guardarEstilo(nombreCrearCss, valorCrearCss);
    guardarEstilo(nombreLogo, valorLogo);
    guardarEstilo(nombreLupa, valorLupa);
    themeButtonDopdown();
}

function themeSailorDay(esIndexOCrear) {
    const valorIndexCss = "/css/style.css";
    const valorCrearCss = "css/stylecreargifo.css";
    const valorLogo = "img/gifOF_logo.png";
    const valorLupa = "img/lupa_inactive.svg";

    if (esIndexOCrear == opcionIndex) {
        document.querySelector("#style-theme-rel").href = valorIndexCss;
        document.querySelector("#header-logo").src = valorLogo;
        document.querySelector("#estilo-lupa-id").src = valorLupa;
    } else if (esIndexOCrear == opcionCrear) {
        document.querySelector("#style-theme-crear-gifo").href = valorCrearCss;
        document.querySelector("#header-logo-arrow").src = valorLogo;

    }
    guardarEstilo(nombreCrearCss, valorCrearCss);
    guardarEstilo(nombreIndexCss, valorIndexCss);
    guardarEstilo(nombreLogo, valorLogo);
    guardarEstilo(nombreLupa, valorLupa);
    themeButtonDopdown();
}