// Si una variable tiene un valor booleano, JS sabe que valor booleano tendra esta variable y solo seria
// necesario preguntar si es verdadero o si es false para hacer cierta cosa en un if pero solo
// poniendo la variable y no comparandola con un valor booleano es decir asi no es bueno hacerlo if(estado === true)
// sino asi son buenas practicas if (estado)
var estado = true,
  resultado = ""; // En este caso resultado es false, porque no tiene nada adentro

if (estado) {
  console.log("continuar");
} else {
  console.log("detenerse");
}
