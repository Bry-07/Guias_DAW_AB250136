function iniciar() {
    var boton = document.getElementById("validar");
    if (boton.addEventListener) {
        boton.addEventListener("click", validar, false);
    } else if (boton.attachEvent) {
        boton.attachEvent("onclick", validar);
    }
}

function validar() {
    var input = document.getElementById("archivo");
    var dato = input.value;
    var valido = false;
    var re = null;

    if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha seleccionado ningún archivo");
        return 0;
    }

    // Regex para imágenes válidas
    re = /^.*\.(jpg|png|gif)$/i;

    if (re.test(dato)) {
        valido = true;
    }

    if (valido == true) {
        alert("El archivo seleccionado es válido");
    } else {
        alert("El archivo seleccionado es inválido. Solo se permiten .jpg, .png y .gif");
    }
}

if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}