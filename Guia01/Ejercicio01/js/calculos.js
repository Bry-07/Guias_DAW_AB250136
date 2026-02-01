var presupuesto, resul1, resul2, resul3, resul4;
var derma = 0.40;
var pediatria = 0.25;
var traumatologia = 0.30;

presupuesto = parseFloat(prompt("Ingrese el presupuesto: "));

resul1 = presupuesto * derma;
resul2 = presupuesto * pediatria;
resul3 = presupuesto * traumatologia;
resul4 = presupuesto - (resul1 + resul2 + resul3);

document.write("<h1>\tResultados del presupuesto Hospitalario</h1>");
document.write("<hr>");
document.write("<p>El presupuesto para dermatología es: $" + resul1.toFixed(2) + "<br></p>");
document.write("<p>El presupuesto para pediatría es: $" + resul2.toFixed(2) + "<br></p>");
document.write("<p>El presupuesto para traumatología es: $" + resul3.toFixed(2) + "<br></p>");
document.write("<p>El presupuesto restante es: $" + resul4.toFixed(2) + "<br></p>");