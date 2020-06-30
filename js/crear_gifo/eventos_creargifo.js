//obtiene parámetro de la url y valida si es mis gifos y crear gifos
async function precargaParametroUrl() {
    let valorParametro = window.location.search.split('=')[1]; //trae todas las variables de la url
    if (valorParametro == 'mis-gifos') {
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
        await obtenerGifosCreados();
    }
}

function eventoClickLinkArrow() {
    let linkArrow = document.getElementById('link-arrow-id');
    linkArrow.addEventListener('click', function() {
        cambiarLinkArrowUrl();
    });
}
window.addEventListener('load', eventoClickLinkArrow);

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
        themeSailorDay('crear');
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

function clickBotonComenzar() {
    let botonComenzar = document.getElementById('btn-comenzar');
    botonComenzar.addEventListener('click', function() {
        avanzarCapturarGifos();
        iniciarCamara();
    });
}
window.addEventListener('load', clickBotonComenzar);

function eventoClickMisGifos() {
    let misGifos = document.getElementById('text-id');
    misGifos.addEventListener('click', function(e) {
        e.preventDefault();
        let crearGifos = document.getElementsByClassName('crear-gifos')[0];
        crearGifos.classList.replace('crear-gifos', 'crear-gifos-replace');
        obtenerGifosCreados();
    })
}
window.addEventListener('load', eventoClickMisGifos);


precargaParametroUrl();