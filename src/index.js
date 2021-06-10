import cipher from './cipher.js';
//buscando el boton de decifrar y poner un escuhador de click y 
document.getElementById("buttonCipher").addEventListener("click", prueba)

function prueba() {
    let offSet = document.getElementById("offSet").value;
    let string = document.getElementById("textOne").value.toUpperCase();
    let resultado = document.getElementById("textTwo");
    resultado.value = string; 

    cipher.encode(offSet,string)
}






console.log(cipher);
