//window.onload = function () {
// window.onload = function () funcion para cargar la página web pero es recomendable esto hacerlo en
// el index, y bajar esa linea de codigo al body, es de buena practica usar el script es decir codigo
// JavaScript ponerlo abajo en el body y no en el head
var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", function () {
  console.log("¡Hola Mundo!");
});
//};
