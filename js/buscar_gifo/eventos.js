/*========================
 Eventos encabezado
========================*/
const textObject = document.querySelector("#text-buscar");

function clickCrearGifos() {
    let botonCrear = document.getElementById('cr-gif');
    botonCrear.addEventListener('click', function() {

        botonCrear.className = 'cr-gif-replace';
    });
    botonCrear.addEventListener('mouseenter', function() {
        botonCrear.className = 'cr-gif-replace';
    });
    botonCrear.addEventListener('mousedown', function() {
        botonCrear.className = 'cr-gif-replace';
    });
    botonCrear.addEventListener('mouseleave', function() {
        botonCrear.className = 'cr-gif-inactivo';
    });

}
window.addEventListener('load', clickCrearGifos);
//Elegir tema
function eventoClickButtonDopdown() {
    let botonElegirTema = document.getElementById('ch-gif');
    let botonDopDown = document.getElementById('button-dopdown');
    [botonElegirTema,
        botonDopDown
    ].forEach(function(botontemas) {
        botontemas.addEventListener('click', function() {

            themeButtonDopdown();
            botontemas.className = 'ch-gif-active';
        });
        botontemas.addEventListener('mouseenter', function() {
            botontemas.className = 'ch-gif-active';
        });
        botontemas.addEventListener('mousedown', function() {
            botontemas.className = 'ch-gif-active';
        });
        botontemas.addEventListener('mouseleave', function() {
            botontemas.className = '';
        });

    });
}
window.addEventListener('load', eventoClickButtonDopdown);

function clickSailorDay() {
    let sailorDay = document.getElementById('sailor-day');
    sailorDay.addEventListener('click', function() {
        themeSailorDay('index');
        sailorDay.className = 'sailor-replace-day';
    });
    sailorDay.addEventListener('mouseenter', function() {
        sailorDay.className = 'sailor-replace-day';
    });
    sailorDay.addEventListener('mousedown', function() {
        sailorDay.className = 'sailor-replace-day';
    });
    sailorDay.addEventListener('mouseleave', function() {
        sailorDay.className = 'sailor-day-class';
    });
}
window.addEventListener('load', clickSailorDay);

function clickSailorNight() {
    let sailoNight = document.getElementById('sailor-night');
    sailoNight.addEventListener('click', function() {
        themeSailorNight('index');
        sailoNight.className = 'sailor-replace-night';
    });
    sailoNight.addEventListener('mouseenter', function() {
        sailoNight.className = 'sailor-replace-night';
    });
    sailoNight.addEventListener('mousedown', function() {
        sailoNight.className = 'sailor-replace-night';
    });
    sailoNight.addEventListener('mouseleave', function() {
        sailoNight.className = 'sailor-night-class';
    });
}
window.addEventListener('load', clickSailorNight);

function agregarClickMisGifos() {
    let misgifos = document.getElementById('text-id');
    misgifos.addEventListener('mouseenter', function(e) {
        e.preventDefault();
        misgifos.className = 'text-replaces';
    });

    misgifos.addEventListener('mousedown', function() {
        misgifos.className = 'text-replaces';
    });
    misgifos.addEventListener('mouseleave', function() {
        misgifos.className = 'text';
    });
}
window.addEventListener('load', agregarClickMisGifos);
/*========================
 Eventos barra de búsqueda
========================*/
//evento input para deplegar barra
function eventoIputBarra() {

    textObject.addEventListener("input",
        function() {
            cargarListaSugerida(textObject.value)
            activarBotonBusqueda(textObject.value)
        }
    );
}
window.addEventListener('load', eventoIputBarra);
//EVENTO CLICK EN BOTÓN BÚSQUEDA 
function eventoClickBotonBuscar() {
    const clickObjeto = document.querySelector("#btn-search-id");

    clickObjeto.addEventListener('click', function(event) {
        event.preventDefault();
        clickBotonBuscar(textObject.value)
    });

    clickObjeto.addEventListener('mouseenter', function() {
        clickObjeto.className = 'btn-search-click';
        let valorTheme = obtenerThemeActual();

        if (valorTheme == './css/style.css' || valorTheme == null) {
            document.querySelector("#estilo-lupa-id").src = './img/lupa.svg';
        } else {
            document.querySelector("#estilo-lupa-id").src = './img/lupa_light.svg';
        }

    });

    clickObjeto.addEventListener('mouseleave', function() {
        activarBotonBusqueda(document.querySelector("#text-buscar").value);
    });

}
window.addEventListener('load', eventoClickBotonBuscar);

//FIN EVENTO CLICK EN BOTÓN BÚSQUEDA PARA REALIZAR BÚSQUEDA


//depliegue barra, evento click
function eventClickList() {
    const elementoListaSugeridaUno = document.querySelector("#sugerencia1");
    const elementoListaSugeridoDos = document.querySelector("#sugerencia2");
    const elementoListaSugeridaTres = document.querySelector("#sugerencia3");
    [
        elementoListaSugeridaUno,
        elementoListaSugeridoDos,
        elementoListaSugeridaTres
    ].forEach(function(buttonLista) {
        buttonLista.addEventListener('click', function(event) {

            let textoItemSeleccionado = event.currentTarget.children[0].textContent;
            clickListaSugerida(textoItemSeleccionado);
        });
        buttonLista.addEventListener('mouseenter', function() {
            buttonLista.className = 'sugerencia-replace';
        });
        buttonLista.addEventListener('mouseleave', function() {
            buttonLista.className = 'sugerencia';
        });
    });
}
window.addEventListener('load', eventClickList);
//evento click sobre imagenes seccion ver más
function clickImgVerMas() {
    const imagenVermas0 = document.querySelector('#sugerido-gif0');
    const imagenVermas1 = document.querySelector('#sugerido-gif1');
    const imagenVermas2 = document.querySelector('#sugerido-gif2');
    const imagenVermas3 = document.querySelector('#sugerido-gif3');
    [
        imagenVermas0,
        imagenVermas1,
        imagenVermas2,
        imagenVermas3
    ].forEach(function(gifVerMas) {
        gifVerMas.addEventListener('mouseenter', function() {
            gifVerMas.className = 'gif-replace';
        });

        gifVerMas.addEventListener('mouseleave', function() {
            gifVerMas.className = 'gif';
        });

    });
}
window.addEventListener('load', clickImgVerMas);


//evento click botón ver más
function eventoClickBotonVerMas() {
    const elementoBotonVerMasCero = document.querySelector("#btn-opt-id0");
    const elementoBotonVerMasUno = document.querySelector("#btn-opt-id1");
    const elementoBotonVerMasDos = document.querySelector("#btn-opt-id2");
    const elementoBotonVerMasTres = document.querySelector("#btn-opt-id3");
    [
        elementoBotonVerMasCero,
        elementoBotonVerMasUno,
        elementoBotonVerMasDos,
        elementoBotonVerMasTres
    ].forEach(function(buttonVerMas) {
        buttonVerMas.addEventListener('click', function(event) {
            let valorIdBoton = event.currentTarget.id;
            clickVerMasGifos(valorIdBoton);
        });
        buttonVerMas.addEventListener('mouseenter', function() {
            buttonVerMas.className = 'btn-opt-replace';
        });
        buttonVerMas.addEventListener('mouseleave', function() {
            buttonVerMas.className = 'btn-opt';
        });
    });
}
window.addEventListener('load', eventoClickBotonVerMas);
//click botones busqueda sugerida

function clickBotonesListaSugerida() {
    const botonListaSugeridaUno = document.querySelector("#boton-result-list0");
    const botonListaSugeridaDos = document.querySelector("#boton-result-list1");
    const botonListaSugeridaTres = document.querySelector("#boton-result-list2");
    const botonListaSugeridaCuatro = document.querySelector("#boton-result-list3");
    const botonListaSugeridaCinco = document.querySelector("#boton-result-list4");
    const botonListaSugeridaSeis = document.querySelector("#boton-result-list5");
    const botonListaSugeridaSiete = document.querySelector("#boton-result-list6");
    const botonListaSugeridaOcho = document.querySelector("#boton-result-list7");

    [botonListaSugeridaUno,
        botonListaSugeridaDos,
        botonListaSugeridaTres,
        botonListaSugeridaCuatro,
        botonListaSugeridaCinco,
        botonListaSugeridaSeis,
        botonListaSugeridaSiete,
        botonListaSugeridaOcho
    ].forEach(function(botonListaSugerida) {
        botonListaSugerida.addEventListener('click', function(event) {
            let idBotonListaSugerida = event.currentTarget.id;
            textoBusquedaOculto(idBotonListaSugerida);
        });
        botonListaSugerida.addEventListener('mouseenter', function() {
            botonListaSugerida.className = 'resultado-lista-replace';
        });
        botonListaSugerida.addEventListener('mouseleave', function() {
            botonListaSugerida.className = 'result-list';
        });
    });

}
window.addEventListener('load', clickBotonesListaSugerida);

function clickSobreGifos() {

}
window.addEventListener('load', clickSobreGifos);