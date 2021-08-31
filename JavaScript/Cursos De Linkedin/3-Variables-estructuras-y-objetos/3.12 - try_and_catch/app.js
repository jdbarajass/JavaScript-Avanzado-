// try a catch permite poner a prueba un bloque de codigo
var animales = ["perro", "gato", "pez"];

var totalAnimales = animales.length;

try {
  // Lo ideal es poner a try afuera, y a dentro el bucle for y fuera de todo esto el catch
  //Acciones a realizar por la
  // en try va a estar todo lo que yo quiera estar probando
  // y si este llega a presentar algun error lo vamos a atrapar con catch
  for (var i = 0; i < totalAnimales; i++) {}
} catch (e) {
  //Manejo de errores
} // Cada vez que el try and catch se esta construyendo, crea una nueva variable en el ambiente actual
// es decir si dejamos a catch dentro del for se va a generar una nueva variable para poder gestionar el try
// and catch
