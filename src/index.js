import cipher from "./cipher.js";

const encriptar = document.getElementById("btnEncriptar");

encriptar.addEventListener("click", function () {
  const offset = parseInt(document.getElementById("offset").value);
  const string = document.querySelector(".input-texto").value;
  const palabraEncriptada = document.getElementById("resultado");

  palabraEncriptada.textContent = cipher.encode(offset, string);
});

const desencriptar = document.getElementById("btnDesencriptar");

desencriptar.addEventListener("click", function () {
  const offset = parseInt(document.getElementById("offset").value);
  const string = document.querySelector(".input-texto").value;
  const palabraDesencriptada = document.getElementById("resultado");

  palabraDesencriptada.textContent = cipher.decode(offset, string);
});
//console.log(cipher);

//Prueba con consola
//const string = "HOLA";
//const offset = 5;
//const encriptarMensaje = cipher.encode(offset, string);
//console.log(encriptarMensaje);

//const desencriptarMensaje = cipher.decode(offset, string);
//console.log(desencriptarMensaje);
