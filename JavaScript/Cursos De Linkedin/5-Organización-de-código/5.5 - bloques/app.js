// La sentencia if puede no usar las llaves {} si lo que va a ejecutar estara en la siguiente linea de codigo
// pero como tal solo una linea de codigo nada mas si son mas lineas debemos colocar las llaves para saber
// en donde empieza y en donde acaba este bloque
var estado = true;

if (estado) console.log("avanzar");
var resultado = 2 + 2;

if (estado) {
  console.log("avanzar");
}

var resultado = 2 + 2;
