var grados
var resultado

grados = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"))
resultado = (grados * 9/5) + 32

document.write("<h2>La temperatura en grados Fahrenheit es: " + resultado.toFixed(2) + " °F</h2>")