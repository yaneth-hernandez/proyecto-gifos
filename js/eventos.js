/*========================
 Eventos barra de búsqueda
========================*/
//evento input para deplegar barra
const textObject = document.querySelector("#text-buscar");
textObject.addEventListener("input",
    function() {
        cargarListaSugerida(textObject.value)
        activarBotonBusqueda(textObject.value)
    }
);

//EVENTO CLICK EN BOTÓN BÚSQUEDA PARA REALIZAR BÚSQUEDA
function eventoClickBotonBuscar() {
    const clickObjeto = document.querySelector("#btn-search-id");
    clickObjeto.addEventListener('click', function(event) {
        event.preventDefault();
        clickBotonBuscar(textObject.value);

    });
}
window.addEventListener('load', eventoClickBotonBuscar);

//FIN EVENTO CLICK EN BOTÓN BÚSQUEDA PARA REALIZAR BÚSQUEDA


//depliegue barra, evento click
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


    })
});




//evento click botón ver más
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

    })
});

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
    });

}
window.addEventListener('load', clickBotonesListaSugerida);

function textoBusquedaOculto(idBotonListaSugerida) {
    let textoBusquedaOculto = document.querySelector("#" + idBotonListaSugerida).childNodes[1].textContent;
    buscarGifo(textoBusquedaOculto, 80, seccionBotoneraBuscar, searchUrl);

}