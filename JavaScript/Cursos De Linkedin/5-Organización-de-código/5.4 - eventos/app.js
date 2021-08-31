// Este codigo me permite tener una relacion muy basica entre mi HTML y mi codigo JavaScript
var btnSaludar = document.getElementById("btnSaludar");
// El parametro que estoy enviando como btnSaludar no es igual al var btnSaludar, estos son diferentes
// uno es parametro el otro es como tal la variable en donde se guardara todo
btnSaludar.addEventListener("click", function () {
  // agregamos un elemento que estara escuchando siempre
  // el boton btnSaludar y este boton siempre estara escuchando un evento llamado click
  console.log("¡Hola Mundo!");
});
