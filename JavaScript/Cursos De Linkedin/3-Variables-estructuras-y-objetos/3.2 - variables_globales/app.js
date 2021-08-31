//Solucion de problemas con variables globales
var mensaje = "mensaje local"; // Si re-declaro la variable sobre escribo el valor original
//Se afecta el valor original de la variable si lo dejo sin el objeto
resultado += 2;

var datos = {}; // Crear este objeto evita el riesgo de colisiones y puedo tener el nombre de la misma variable
// sin cambiar su valor
datos.mensaje = "mensaje local del objeto"; // Se hace para que el la variable no sea sobre escrita
// porque el alcance del Scope es limitado
datos.resultado = 120;

function saludar() {
  console.log(mensaje);
  console.log(resultado);

  console.log(datos.mensaje);
  console.log(datos.resultado);
}

saludar();
