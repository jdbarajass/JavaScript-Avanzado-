// JSLint es un servicio que me va a permitir a mi validar mi codigo contra reglas establecidas y poder asi
// generar un codigo limpio y un codigo mas estructurado
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
