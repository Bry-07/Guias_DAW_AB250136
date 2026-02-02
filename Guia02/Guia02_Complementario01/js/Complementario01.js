// Pedir una cifra entera al usuario

let numero = parseInt(prompt("Ingrese un número entero: "));

numero = Math.abs(numero); // Obtener el número absoluto para evitar problemas con números negativos

let texto = numero.toString(); // Convertir el número a una cadena de caracteres para poder trabajar con ella y poder contar las cifras

// Variables 

let cantidadCifras = 0;

let cantPares = 0;
let cantImpares = 0;

let sumaPares = 0;
let sumaImpares = 0;
let sumaTotal = 0;

let cifraMayor = null; // null para inicializar la variable
let cifraMenor = null;

// Cifras 

for (let i = 0; i < texto.length; i++) {
    let cifra = parseInt(texto[i]);

    cantidadCifras++;

    sumaTotal += cifra;

    if (i === 0) {
        cifraMayor = cifra;
        cifraMenor = cifra;
    }

    if (cifra % 2 === 0) {
        cantPares++;
        sumaPares += cifra;
    } else {
        cantImpares++;
        sumaImpares += cifra;
    }

    if (cifra > cifraMayor) {
        cifraMayor = cifra;
    }

    if (cifra < cifraMenor) {
        cifraMenor = cifra;
    }
}
// Mostrar resultados
document.writeln("<div class=\"container\">");
document.writeln("<h1>Resultados</h1>");

document.writeln("<p>Cifra: <u>" + texto + "</u></p>");
document.writeln("<p>Cantidad de cifras: <u>" + cantidadCifras + "</u></p>");
document.writeln("<p>Cantidad de cifras pares: <u>" + cantPares + "</u></p>");
document.writeln("<p>Cantidad de cifras impares: <u>" + cantImpares + "</u></p>");
document.writeln("<p>Suma de cifras pares: <u>" + sumaPares + "</u></p>");
document.writeln("<p>Suma de cifras impares: <u>" + sumaImpares + "</u></p>");
document.writeln("<p>Suma total: <u>" + sumaTotal + "</u></p>");
document.writeln("<p>Mayor cifra: <u>" + cifraMayor + "</u></p>");
document.writeln("<p>Menor cifra: <u>" + cifraMenor + "</u></p>");
document.writeln("</div>");

// Fin del programa