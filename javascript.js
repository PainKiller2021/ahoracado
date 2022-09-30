const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnHablar = document.querySelector("#escuchar");

function Encriptar(){
var mensaje = inputMensaje.value;
var mensajeEncriptado= mensaje
.replaceAll("e","enter")
.replaceAll("i","imes")
.replaceAll("o","ober")
.replaceAll("a","ai")
.replaceAll("u","ufat");
inputResultado.value=mensajeEncriptado;
}
function Desencriptar(){
    var mensajeEncriptado= inputMensaje.value;
    var mensaje= mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value = mensaje;
}

btnEncriptar.onclik=Encriptar;

btnDesencriptar.onclik=Desencriptar;