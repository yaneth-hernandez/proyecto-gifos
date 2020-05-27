/*========================
 Eventos barra de búsqueda
========================*/
//evento input para deplegar barra
const textObject = document.querySelector("#text-buscar");
textObject.addEventListener("input",
    function() {
        cargarListaSugerida(textObject.value)
    }
);

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