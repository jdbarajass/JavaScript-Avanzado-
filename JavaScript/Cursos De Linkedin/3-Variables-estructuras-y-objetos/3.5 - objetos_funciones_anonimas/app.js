// La idea es usar funciones anonimas (funciones que no tienen nombre), pero guardarlas de un objeto
// y esto a su vez dentro de un metodo. Hacer uso de POO, con eso podemos reutilizar el codigo mas facil
var tienda = {
  nombre: "Tienda las 4 esquinas",
  calcular: function (costo1, costo2) {
    return costo1 + costo2;
  },
  saludar: function () {
    var mensaje = "Hola ";
    return mensaje;
  },
};

console.log(tienda.nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar"); // Boton que esta en el archivo

btnSaludar.addEventListener("click", function () {
  // escucha cuando alguien haga click
  console.log(tienda.saludar()); // En el momento que alguien haga click va a ejecutar la funcion anonima que
  // llama a tienda.saludar, estamos ejecutando el metodo de este objeto.
  // esto me permite invocarlo, sin tener que estar re-declarando alguna funcion y hacer un uso excesivo de
  // funciones anonimas
});
