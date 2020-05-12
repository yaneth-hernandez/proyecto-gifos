//página principal

function themeButtonDopdown() {
    var objectSelector = document.querySelector("#contenedor-menu").style.visibility;
    if (objectSelector == "" || objectSelector == "hidden") {
        document.querySelector("#contenedor-menu").style.visibility = "visible";
    } else {
        document.querySelector("#contenedor-menu").style.visibility = "hidden";
    }
}

function themeSailorNight() {
    document.querySelector("#style-theme-rel").href = "/css/style-theme2.css";
    document.querySelector("#header-logo").src = "img/gifOF_logo_dark.png";
    themeButtonDopdown();
}

function themeSailorDay() {
    document.querySelector("#style-theme-rel").href = "/css/style.css";
    document.querySelector("#header-logo").src = "img/gifOF_logo.png";
    themeButtonDopdown();
}

function opcionesBusqueda() {

    var objectSelector = document.querySelector(".resultado-sugerido").style.visibility;
    if (objectSelector == "" || objectSelector == "hidden") {
        document.querySelector(".resultado-sugerido").style.visibility = "visible";
    } else {
        document.querySelector(".resultado-sugerido").style.visibility = "hidden";
    }
}

//crear gifos

function themeSailorNightCrGifo() {
    document.querySelector("#style-theme-crear-gifo").href = "css/stylecreargifo-theme2.css";
    document.querySelector("#header-logo-arrow").src = "img/gifOF_logo_dark.png";
    themeButtonDopdown();
}

function themeSailorDayCrGifo() {
    document.querySelector("#style-theme-crear-gifo").href = "css/stylecreargifo.css";
    document.querySelector("#header-logo-arrow").src = "img/gifOF_logo.png";
    themeButtonDopdown();
}