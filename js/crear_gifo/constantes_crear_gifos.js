const procesoCrearGifosId = "crear-gifos-id";
const contenedorCapturaId = "contenedor-captura-id";
const areaBotonesCaptura = "btns-camara-captura-id";
const areaBotonesChequeo = "area-botones-chequeo-id";
//const areaContenedorSubiendoGifos = "";
const seccionProcesoCrear = document.querySelector("#proceso-crear-gifos-id");

const cuerpoComenzar = `<figure class="crear-gifos" id="crear-gifos-id">
        <figcaption class="barra-crear-gifo" id="barra-crear-gifo">Crear Guifos</figcaption>
        <div class="cont-img-tit-crear-gifo">
            <div class="img-crear-gifo"><img id="img-crear-gifo" src="img/window img.png" alt="Crear-gifos"></div>
            <div class="titulo-crear-gifo" id="titulo-crear-gifo">Aquí podrás crear tus propios guifos</div>
        </div>
        <p class="text-crear-gifo" id="text-crear-gifo">Crear tu <span class="crear-gifos-negrita">guifo</span> es muy fácil, graba cualquier imagen con tu cámara y obtén guifos<br> personalizados. Los pasos para crear tu guifo son:</p>
        <ol class="text-crear-gifo">
            <li class="text-crear-gifo">1) Dar permisos de acceso a la cámara (sólo por el tiempo de uso)</li>

            <li class="text-crear-gifo">2) Capturar tu momento guifo</li>
            <li class="text-crear-gifo">3) Revisar el momento</li>
            <li class="text-crear-gifo">4) Listo para subir y compartir! ¿Quieres comenzar a crear tu <span class="crear-gifos-negrita">guifo</span> ahora?
        </ol>
        <div class=content-btn-crear-gifo>
            <button class="btn-cancelar-class" id="btn-cancelar" onclick="botonCancelarComienzo()">Cancelar</button>
            <button onclick="avanzarCapturarGifos(); iniciarCamara()";class="btn-comenzar-class" id="btn-comenzar">Comenzar</button>
            
        </div>
    </figure>`;


const cuerpoCapturarGifos = `<figure id="contenedor-captura-id" class="contenedor-captura">
        <figcaption class="content-text-btn-cerrar">
            <span>Un Chequeo Antes de Empezar</span>
            <img class="close-btn-crar-gifo" src="img/close.svg" alt="">
        </figcaption>
        <div class="content-imagen-chequeo">
            <video data-duration="0" class="img-chequeo" id="video" onended="detenerConteo();" ></video>
        </div>
        <div class="area-botones-chequeo" id="area-botones-chequeo-id">
            <div class="btns-camara-captura" id="btns-camara-captura-id">
                <button  class="boton-camara-chequeo" onclick="cambiarAreaCapturaVideo()"><img id="img-camera-chequeo-id" class="img-camera-chequeo" src="img/camera.svg"/></button>
                <button  class="boton-capturar-chequeo" onclick="cambiarAreaCapturaVideo(); iniciarGrabacion();">Capturar</button>
            </div>
        </div>
    </figure>`;

const botonesCapturarGifos = `
    <input class="input-capturar" type="text" id="input-timer-id" readonly>
    <div class="boton-listo-vineta">
        <button class="boton-vineta-captura-gifo" onclick="cambiarAreaVistaPrevia(); detenerGrabacion(); detenerConteo();"><img class="img-vineta-captura" src="img/recording.svg" alt="" srcset=""/></button>
        <button class="boton-listo" onclick="cambiarAreaVistaPrevia(); detenerGrabacion(); detenerConteo();">Listo</button>
       </div>`;

const botonesVistaPrevia = `
       <div class="temporizador-barra-estado">
            <input class="input-vista-previa" type="text" id="input-timer-id" readonly>
             <div class="boton-temporizador">
                <button class="boton-arrow-temporizador" onclick="playVistaPrevia();">
                    <img class="img-boton-temporizador"src="img/forward_1.svg" alt="" sizes="" srcset="">
                </button>
                <div class="temporizador">
                <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                            <div class="contenido-barra"></div>
                </div>
            </div>
         </div>
        <div class="boton-repetir-subir">
            <button class="boton-repetir-captura" onclick="volverCaptura()">Repetir Captura</button>
            <button class="boton-subir-gifo" onclick="cambiarSubiendoGifos()">Subir Guifo</button>
        </div>`;

const cuerpoSubiendoGifo = `
<figcaption class="content-text-btn-cerrar">
    <span>Subiendo Guifo</span>
    <img class="close-btn-crar-gifo" src="img/close.svg" alt="">
</figcaption>
<figure class="content-img-subiendo-gifo">
    <img class="img-subiendo-gifo" src="img/globe_img.png" alt="" srcset="" />
    <figcaption class="texto-content-subiendo-gifo">Estamos subiendo tu guifo…</figcaption>
    <div class="temporizador-subiendo-gifos">
    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
                    <div class="contenido-barra"></div>
    </div>
    <span class="texto-temporizador">Tiempo restante: <span class="decoracion-texto">38 años</span>algunos minutos</span>
</figure>
<div class="area-bton-subiendo-guifo">
    <div class="boton-cancelar-subiendo-guifos">
    <button class="boton-cancelar-subida" onclick="cancelarSubirGifo()">Cancelar</button>
</div>
</div>
</div> `;

const gifoSubido = `<figcaption class="encabezado-gifo-subido"><span class="text-gifo-subido">Guifo Subido Con Éxito</span>
<img class="close-btn-crar-gifo" src="img/close.svg" alt="">
</figcaption>
<div class="contenido-gifo-subido">
<div class="contenedor-img-gifo-subido"><img class="img-gifo-subido" id="img-gifo-subido-id" src="" alt="" srcset=""></div>
<div class="contenido-gifo-subido-botones">
    <span class="contenido-text-gifo-subido">Guifo creado con éxito</span>
    <button class="boton-copiar-enlace-gifo" id="boton-copiar-enlace-gifo-id" onclick ="obtenerEnlaceImgGifo()" >Copiar Enlace Guifo</button>
    <button class="boton-descargar-gifo" onclick="descargaImagen()">Descargar Guifo</button>
</div>
</div>
<div class="contenedor-boton-listo-subir">
<button class="boton-subido-listo" onclick = "obtenerUrlDeGifoCreado()">Listo</button>
</div>`;