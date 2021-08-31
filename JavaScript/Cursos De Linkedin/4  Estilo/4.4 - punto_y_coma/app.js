// el punto y coma significa instrucciones que se van a ejecutar
// y la coma significa separacion entre parametros entonces es muy buena practica
// usar punto y coma para saber que la instruccio finalizo y coma para separacion de parametros
// poner el ; me permite saber en que momento se esta ejecutando una sentencia
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

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", function () {
  console.log(tienda.saludar());
});
