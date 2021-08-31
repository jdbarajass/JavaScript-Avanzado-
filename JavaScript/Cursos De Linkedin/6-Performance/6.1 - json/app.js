// JSON = JAVASCRIPT OBJECT NOTATION es un formato para el intercambio de datos. Basicamente JSON
// va a describir la informacion que nosotros queremos utilizar
// JSON trata los datos como objetos
// JSON es un formato que nos va a permitir tener la versatilidad para poder tener interaccion e intercambio
// de informacion entre distintas aplicaciones web
//$.getJSON("productos.json", function(productos){
var url =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Santo%20Domingo%2C%20DO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
$.getJSON(url, function (productos) {
  console.log(productos);
  /*
	var totalProductos = productos.length;

	for (var i = 0; i < totalProductos; i++) {
		console.log(productos[i].nombre);
	};*/
});
