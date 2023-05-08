//Objeto es Cipher
const cipher = {
  //Metodo encode

  encode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("Wrong argument types");
    }
    let palabraEncriptada = "";
    for (let i = 0; i < string.length; i++) {
      let codigoChar = string.charCodeAt(i);
      if (codigoChar >= 65 && codigoChar <= 90) {
        codigoChar = ((codigoChar - 65 + offset) % 26) + 65;
      } else if (codigoChar >= 97 && codigoChar <= 122) {
        codigoChar = ((codigoChar - 97 + offset) % 26) + 65;
      }
      palabraEncriptada += String.fromCharCode(codigoChar);
    }
    return palabraEncriptada;
  },

  //Metodo decode

  decode: function (offset, string) {
    if (typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError("Wrong argument types");
    }
    let palabraDesencriptada = "";
    for (let i = 0; i < string.length; i++) {
      let codigoChar = string.charCodeAt(i);
      if (codigoChar >= 65 && codigoChar <= 90) {
        codigoChar = ((codigoChar - 65 - (offset % 26) + 26) % 26) + 65;
      } //else if (codigoChar >= 97 && codigoChar <= 122) {
      //codigoChar = ((codigoChar - 97 - (offset % 26) + 26) % 26) + 65;
      //}
      //console.log(codigoChar);
      palabraDesencriptada += String.fromCharCode(codigoChar);
    }
    return palabraDesencriptada;
  },
};

//const encode = (offset, palabra) => {
// let encriptarPalabra = "";
// for (let i = 0; i < palabra.length; i++){
//  let reglaAscii = palabra.charCodeAt(i);
// if (reglaAscii >= 65 && reglaAscii >= 90){
//  let valorAscii = ((reglaAscii - 65 + offset) % 26) + 65;
// encriptarPalabra+= String.fromCharCode(valorAscii);
// }
// }
//return encriptarPalabra;

//};
export default cipher;

//function btnEncriptar(){
//const textoEncriptado = encriptar(inputTexto.value)
//mensaje.value = textoEncriptado;
//}

//function encriptar(stringEncriptada){

//stringEncriptada = stringEncriptada.toUpperCase();

//for(let i = 0; i < matrizCodigo.length; i++){
// if(stringEncriptada.includes()){
//    stringEncriptada = stringEncriptada.replaceAll(String.fromCharCode(), ;
//}
//}
//return stringEncriptada;
//};
