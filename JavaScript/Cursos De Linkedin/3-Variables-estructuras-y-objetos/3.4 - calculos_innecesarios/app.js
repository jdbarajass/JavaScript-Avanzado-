var animales = ["perro", "gato", "pez"];

var totalAnimales = animales.length; // Cuando estamos en un ciclo en este caso for, y le decimos al programa
// que va a finalizar en cierto valor como lo es animales.length, es mucho mejor hacer este calculo nosotros
// mismos en una variable afuera a que el mismo ciclo la haga cada vez que empieza un ciclo es mas eficiente
// el programa si de una vez le evitamos este paso ya que es un calculo repetitivo en innecesario
for (var i = 0; i < totalAnimales; i++) {
  console.log(animales[i]);
}
