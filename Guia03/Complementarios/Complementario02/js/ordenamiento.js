window.onload = function () {

// Inicialización de variables
var numeros = [];
var i, j, max, temp;

// Validación para que el número sea numérico y >= 2
do {
    max = prompt("Cuántos números va a ingresar (valor entero):", "");

    if (isNaN(max)) {
        alert("El valor digitado no es numérico.");
        continue;
    }

    max = parseInt(max);

    if (max < 2) {
        alert("El arreglo debe ser de dimensión 2 o superior");
    }

} while (isNaN(max) || max < 2);


// Ingreso de números
var cancelado = false;

for (i = 0; i < max; i++) {

    var valor;

    do {
        valor = prompt("Ingrese el número " + (i + 1) + ":");

        if (valor === null) {
            alert("Proceso cancelado por el usuario.");
            cancelado = true;
            break;
        }

        if (valor.trim() === "") {
            alert("No puede dejar el campo vacío.");
            continue;
        }

        if (isNaN(valor)) {
            alert("Debe ingresar un valor numérico.");
            continue;
        }

        numeros[i] = parseFloat(valor);
        break;

    } while (true);

    if (cancelado) break;
}


if (cancelado) {
        alert("Proceso cancelado por el usuario.");
}


// Mostrar números ingresados
var contenido = "<h1>Números ingresados</h1>";
contenido += "<hr>";
contenido += "<table class='table table-bordered table-hover'><tr>";

for (i = 0; i < max; i++) {
    contenido += "<td>" + numeros[i] + "</td>";
}

contenido += "</tr></table>";


// Preguntar orden
var resp;
var valido = false;

do {
    resp = prompt("¿Desea ordenar de forma ascendente o descendente? (A/D)");

    if (resp === null) {
        document.getElementById("resultado").innerHTML = contenido;
        alert("Proceso cancelado por el usuario.");
        return;
    }

    resp = resp.trim().toUpperCase();

    if (resp === "A" || resp === "a" || resp === "Ascendente" || resp === "ascendente" || resp === "ASCENDENTE") {

        valido = true;

        for (i = 0; i < max - 1; i++) {
            for (j = i + 1; j < max; j++) {
                if (numeros[i] > numeros[j]) {
                    temp = numeros[j];
                    numeros[j] = numeros[i];
                    numeros[i] = temp;
                }
            }
        }

        contenido += "<h1 class='mt-5'>Números ordenados ascendentemente</h1>";
    }

    else if (resp === "D" || resp === "d" || resp === "Descendente" || resp === "descendente" || resp === "DESCENDENTE") {

        valido = true;

        for (i = 0; i < max - 1; i++) {
            for (j = i + 1; j < max; j++) {
                if (numeros[i] < numeros[j]) {
                    temp = numeros[j];
                    numeros[j] = numeros[i];
                    numeros[i] = temp;
                }
            }
        }

        contenido += "<h1 class='mt-5'>Números ordenados descendentemente</h1>";
    }

    else {
        alert("Debe ingresar A o D.");
    }

} while (!valido);


// Mostrar ordenados
contenido += "<hr>";
contenido += "<table class='table table-bordered table-hover'><tr>";

for (i = 0; i < max; i++) {
    contenido += "<td>" + numeros[i] + "</td>";
}

contenido += "</tr></table>";

document.getElementById("resultado").innerHTML = contenido;

};
