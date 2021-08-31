// Operador ternario es basicamente ahorrarse lineas de codigo escribiendo las sentencias de condiicion
// como normalmente las escribiamos como en el caso del if y el else, ahora el codigo sera asi:
// (CONDICION) ? RESULTADO_VERDADERO : RESULTADO_FALSO
var estado = true;

// if(estado){
//  console.log("continuar")
// } else {
//  console.log("detenerse");
// }

var accion = estado ? "continuar" : "detenerse"; // y se debe guardar en una variable para luego consultar
// su valor

console.log(accion);
