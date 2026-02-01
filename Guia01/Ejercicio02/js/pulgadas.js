var metros;
var pulgadas;

metros = parseFloat(prompt("Ingrese la cantidad de metros para convertir a pulgadas:"));
pulgadas = metros * 39.3701;

document.write("<h1>\tConversión de Metros a Pulgadas</h1>");
document.write("<hr>");
document.write("<p>" + metros.toFixed(2) + " metros equivalen a " + pulgadas.toFixed(2) + " pulgadas.<br></p>");