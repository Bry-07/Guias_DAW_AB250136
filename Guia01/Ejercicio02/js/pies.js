var metros;
var pies;

metros = parseFloat(prompt("Ingrese la cantidad de metros para convertir a pies:"));
pies = metros * 3.28084;

document.write("<h1>\tConversión de Metros a Pies</h1>");
document.write("<hr>");
document.write("<p>" + metros.toFixed(2) + " metros equivalen a " + pies.toFixed(2) + " pies.<br></p>");