// En muchas ocasiones el navegador que estemos utilizando se puede quedar corto al momento de estar
// detectando errores jshint.com detecta errores y potenciales problemas en mi codigo JavaScript
// puede ser onnline o descargarlo y estar verificando el codigo automaticamente
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
