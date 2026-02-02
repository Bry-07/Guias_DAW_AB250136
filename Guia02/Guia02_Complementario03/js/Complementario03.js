// Pedir un número entero al usuario

let numero = parseInt(prompt("Ingrese un número entero positivo: "));

numero = Math.abs(numero); // Obtener el número absoluto para evitar problemas con números negativos

let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

// Mostrar resultados
document.writeln("<div class=\"container\">");
document.writeln("<h1>Resultados</h1>");

document.writeln("<p>Número: <u>" + numero + "</u></p>");
document.writeln("<p>Factorial: <u>" + factorial + "</u></p>");
document.writeln("</div>");

// Fin del programa