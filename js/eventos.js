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
const clickObjeto = document.querySelector("#btn-search-id");
clickObjeto.addEventListener('click', function(event) {
    event.preventDefault();
    clickBotonBuscar(textObject.value);
    //falta recoger la barra 

});

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
        //falta recoger la barra 
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