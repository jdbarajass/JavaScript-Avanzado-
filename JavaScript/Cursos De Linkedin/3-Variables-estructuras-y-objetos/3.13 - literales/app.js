// Si los datos que voy a almacenar en un array o en un objeto son muy poquitos no vale la pena instanciarlos
// es decir hacer esto var otraPersona = new Object(); por otro lado es mucho mejor tan solo ponerles el
// valor directamente persona.jesus = 27 y lo mismo para los array, si son pocos los elementos alli dentro
// tratar de no usar el new sino directamente se le coloca el valor
var persona = {}; // Se crea de esta manera porque se que va a tener pocas propiedades dentro
console.log(persona);
persona.jesus = 27;
persona.nombre = "jesus";
console.log(persona);
console.log(persona["jesus"]);

/* console.log(persona);
persona.nombre = "Sergio";
console.log(persona);
var otraPersona = new Object();
console.log(persona); */

var lista = new Array(); // con esto podriamos hacerlo y esta bien pero todo lo que conllevo al programa
// crear la lista y demas
lista[0] = "manzana"; // lista en la posicion cero es manzana
lista[1] = "pera"; // lista en la posiccion 1 es pera

var listaNueva = ["manzana", "pera"]; // Si solo vamos a usar 2 propiedades o 2 elementos es mejor crearlos
// de esta forma para que el programa sea mas eficiente, se inicializa la lista de una vez.
