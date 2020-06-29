//inicialización de funciones
const opcionIndex = 'index';
const opcionCrear = 'crear';

const nombreIndexCss = 'indexCssKey';
const nombreCrearCss = 'crearCssKey';
const nombreLogo = 'logoKey';
const nombreLupa = 'lupaKey';
const nombreCamara = 'camaraKey';
const nombreBoton = 'botonKey'


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
    var recuperarTemaLupa;
    var recuperarTemaCamara;
    var recuperarTemaBoton;

    recuperarTemaBoton = localStorage.getItem(nombreBoton);
    recuperarTemaLogo = localStorage.getItem(nombreLogo);
    if (origenPagina == "/index.html") {
        recuperarTemaCss = localStorage.getItem(nombreIndexCss);
        recuperarTemaLupa = localStorage.getItem(nombreLupa);
        if (recuperarTemaCss != null && recuperarTemaLogo != null && recuperarTemaLupa != null && recuperarTemaBoton != null) {
            document.querySelector("#style-theme-rel").href = recuperarTemaCss;
            document.querySelector("#header-logo").src = recuperarTemaLogo;
            document.querySelector("#estilo-lupa-id").src = recuperarTemaLupa;
            document.querySelector("#dopdown-forward").src = recuperarTemaBoton;

        }
    } else if (origenPagina == "/index-crear-gifo.html") {
        recuperarTemaCamara = localStorage.getItem(nombreCrearCss);
        recuperarTemaCss = localStorage.getItem(nombreCrearCss);
        if (recuperarTemaCss != null && recuperarTemaLogo != null && recuperarTemaCamara != null && recuperarTemaBoton != null) {
            document.querySelector("#style-theme-crear-gifo").href = recuperarTemaCss;
            document.querySelector("#header-logo-arrow").src = recuperarTemaLogo;
            document.querySelector("#dopdown-forward-cr").src = recuperarTemaBoton;
            //document.querySelector("#img-camera-chequeo-id").src = recuperarTemaCamara;
        }
    }
}


function themeSailorNight(esIndexOCrear) {
    const valorIndexCss = "/css/style-theme2.css";
    const valorCrearCss = "css/stylecreargifo-theme2.css";
    const valorLogo = "img/gifOF_logo_dark.png";
    const valorLupaInactiva = "img/combined_shape.svg";
    const valorCamaraNight = "img/camera_light.svg";
    const valorBotonNight = "img/forward.svg";


    if (esIndexOCrear == opcionIndex) {
        document.querySelector("#style-theme-rel").href = valorIndexCss;
        document.querySelector("#header-logo").src = valorLogo;
        document.querySelector("#estilo-lupa-id").src = valorLupaInactiva;
        document.querySelector("#dopdown-forward").src = valorBotonNight;

    } else if (esIndexOCrear == opcionCrear) {
        document.querySelector("#style-theme-crear-gifo").href = valorCrearCss;
        document.querySelector("#header-logo-arrow").src = valorLogo;
        document.querySelector("#dopdown-forward-cr").src = valorBotonNight;
        //document.querySelector("#img-camera-chequeo-id").src = valorCamaraNight;
    }
    guardarEstilo(nombreIndexCss, valorIndexCss);
    guardarEstilo(nombreCrearCss, valorCrearCss);
    guardarEstilo(nombreLogo, valorLogo);
    guardarEstilo(nombreLupa, valorLupaInactiva);
    guardarEstilo(nombreCamara, valorCamaraNight);
    guardarEstilo(nombreBoton, valorBotonNight);
    themeButtonDopdown();
    mostrarIconosTema();
}

function themeSailorDay(esIndexOCrear) {
    const valorIndexCss = "/css/style.css";
    const valorCrearCss = "css/stylecreargifo.css";
    const valorLogo = "img/gifOF_logo.png";
    const valorLupaInactiva = "img/lupa_inactive.svg";
    const valorCamaraDay = "img/camera.svg";
    const valorBotonDay = "img/dropdown.svg";


    if (esIndexOCrear == opcionIndex) {
        document.querySelector("#style-theme-rel").href = valorIndexCss;
        document.querySelector("#header-logo").src = valorLogo;
        document.querySelector("#estilo-lupa-id").src = valorLupaInactiva;
        document.querySelector("#dopdown-forward").src = valorBotonDay;

    } else if (esIndexOCrear == opcionCrear) {
        document.querySelector("#style-theme-crear-gifo").href = valorCrearCss;
        document.querySelector("#header-logo-arrow").src = valorLogo;
        document.querySelector("#dopdown-forward-cr").src = valorBotonDay;
        // document.querySelector("#img-camera-chequeo-id").src = valorCamaraDay;

    }


    guardarEstilo(nombreCrearCss, valorCrearCss);
    guardarEstilo(nombreIndexCss, valorIndexCss);
    guardarEstilo(nombreLogo, valorLogo);
    guardarEstilo(nombreLupa, valorLupaInactiva);
    guardarEstilo(nombreCamara, valorCamaraDay);
    guardarEstilo(nombreBoton, valorBotonDay);
    themeButtonDopdown();
    mostrarIconosTema();
}

function obtenerThemeActualCrear() {
    let obtenerTemaCss = localStorage.getItem(nombreCrearCss);
    return obtenerTemaCss;
}

function mostrarIconosTema() {
    let valorTheme = obtenerThemeActualCrear();
    let imagenCamara = document.querySelector("#img-camera-chequeo-id");


    if (imagenCamara != null) {
        if (valorTheme == "css/stylecreargifo-theme2.css") {
            imagenCamara.src = "img/camera_light.svg";

        } else {
            imagenCamara.src = "img/camera.svg";

        }
    }
}