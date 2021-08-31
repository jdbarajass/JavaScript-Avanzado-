// console.time() y console.timeEnd() sirve para hacer pruebas de performance y mirar que tanto se demora
// un cierto bloque de codigo en ejecutarse y si lo puedo optimizar mas
// esto se llama pruebas de rendimiento
console.time("revisión");

var animales = ["perro", "gato", "pez"];
var l = animales.length;
console.log(animales[i]);
for (var i = 0; i < 10000; i++) {
  console.log("false " + animales[i]);
  animales[i] = i;
  console.log("true " + animales[i]);
}

console.timeEnd("revisión"); // Si comienzo la etiqueta con revision debo terminar con revision y no con
// otra palabra, recordar que en cada browser los tiempos varian pero puedo obtener una media de los datos
console.log(animales);
console.log(animales.length);
// la idea de aplicar estos tiempos es hacerlo por bloques de accion dependiendo de los objetivos de la
// aplicacion y hacer esta prueba de performance acorde a cada accion que estara realizando la aplicacion web
