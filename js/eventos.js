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
});

//depliegue barra, evento click
const elementoListaSugeridaUno = document.querySelector("#sugerencia1");
const elementoListaSugeridoDos = document.querySelector("#sugerencia2");
const elementoListaSugeridaTres = document.querySelector("#sugerencia3");
[elementoListaSugeridaUno, elementoListaSugeridoDos, elementoListaSugeridaTres].forEach(function(buttonLista) {
    buttonLista.addEventListener('click', function(event) {

        let textoItemSeleccionado = event.currentTarget.children[0].textContent;
        clickListaSugerida(textoItemSeleccionado);
    })
});