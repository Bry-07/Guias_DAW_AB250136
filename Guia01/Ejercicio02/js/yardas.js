var metros;
var yardas;

metros = parseFloat(prompt("Ingrese la cantidad de metros para convertir a yardas:"));
yardas = metros * 1.09361;

document.write("<h1>\tConversión de Metros a Yardas</h1>");
document.write("<hr>");
document.write("<p>" + metros.toFixed(2) + " metros equivalen a " + yardas.toFixed(2) + " yardas.<br></p>");