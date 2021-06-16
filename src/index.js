import cipher from './cipher.js';
//buscando el boton de decifrar y poner un escuhador de click y 
document.getElementById("buttonCipher").addEventListener("click", cifrar)

function cifrar() {
    let offSet = document.getElementById("offSet").value;
    let string = document.getElementById("textOne").value;
document.getElementById("textTwo").value = cipher.encode(offSet, string); 
}

document.getElementById("buttonDecipher").addEventListener("click", descifrar)

function descifrar() {
    let offSet = document.getElementById("offSet").value;
    let string = document.getElementById("textTwo").value;
document.getElementById("textOne").value = cipher.decode(offSet, string,);
}