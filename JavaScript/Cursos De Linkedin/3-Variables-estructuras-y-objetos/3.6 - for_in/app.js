var persona = {
  nombre: "Sergio",
  email: "sergiobritor@gmail.com",
  twitter: "yacafx",
  saludar: function () {
    return "Hola mundo";
  },
};

var dato = "";

for (dato in persona) {
  // Bracket notation se aplica cuando no se el nombre de la variable y dot notation se aplica cunado
  // si se literalmente el valor
  // dato es el iterador
  // La variable dato en cada iteracion que vaya por persona, estara almanenando el valor,
  // es decir cuando este iterando el primer valor que va a tener la propiedad nombre y ese nombre lo
  // guardara directamente en la variable dato, que acabo de declarar, cuando sigue la iteracion, pasara
  // lo mismo con email, twitter y saludar.
  //console.log(dato); // si lo ejecuto asi no mas, se veran el nombre de todas las propiedades
  //console.log(dato);
  console.log(dato, persona[dato]); // Pero tambien podemos acceder a cada uno de los valores que posee cada
  // una de las propiedades del objeto persona. Este es el codigo ... console.log(dato, persona[dato]);
  // indico el nombre del objeto que en este caso es persona y le paso el valor de lo que quiero obtener
}
