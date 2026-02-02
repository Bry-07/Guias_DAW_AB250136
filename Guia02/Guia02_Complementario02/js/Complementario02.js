let palabra = prompt("Ingrese su palabra: ");


//Contador de vocales
let cantVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u") {
        cantVocales++;
    }

    if (palabra[i] === "A" || palabra[i] === "E" || palabra[i] === "I" || palabra[i] === "O" || palabra[i] === "U") {
        cantVocales++;
    }
}

// Limpiar la palabra de espacios y pasar a minúsculas
let palabraLimpia = palabra.toLowerCase().replace(/ /g, "");

// Invertir la palabra
let palabraInvertida = "";

for (let i = palabraLimpia.length - 1; i >= 0; i--) {
    palabraInvertida += palabraLimpia[i];
}

let esPalindromo = false;

if (palabraLimpia === palabraInvertida) {
    esPalindromo = true;
}

// Mostrar resultados
document.writeln("<div class=\"container\">");
document.writeln("<h1>Resultados</h1>");

document.writeln("<p>Palabra: <u>" + palabra + "</u></p>");
document.writeln("<p>Cantidad de vocales: <u>" + cantVocales + "</u></p>");

if (esPalindromo){
    document.writeln("<p>¿Es palíndromo?: <u>Sí</u></p>");
    document.writeln("<p>Invertida de la palabra: <u>" + palabraInvertida + "</u></p>");
}
else{
    document.writeln("<p>¿Es palíndromo?: <u>No</u></p>");
}

document.writeln("</div>");
// Fin del programa
