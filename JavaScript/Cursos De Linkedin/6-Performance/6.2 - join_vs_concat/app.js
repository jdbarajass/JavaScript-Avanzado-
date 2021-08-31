//
var animales = ["perro", "gato", "pez"];

var listaAnimales = animales.join(", "); // Lo que hace join es unir y en esta linea de codigo lo que hizo
// fue unir la lista de animales y separarlas por comas como se le indico, es decir quedaria perro , gato , pez
// el resultado de la operacion join es una cadena de texto
var nuevaLista = animales.concat(","); // El metodo concat lo que hace es una concatenacion
// y el console.log() de esto se veria asi ["perro", "gato", "pez", ","] lo que hace es concatenar a lo que
// ya tenia es decir la puso como una pila
// el resultado de la operacion concat es un arreglo

console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista); // typeof me indica cual es el tipo de dato de mi variable
