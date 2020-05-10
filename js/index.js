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