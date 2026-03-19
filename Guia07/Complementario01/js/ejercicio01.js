function iniciar() {
    var boton = document.getElementById("validar");
    if (boton.addEventListener) {
        boton.addEventListener("click", validar, false);
    } else if (boton.attachEvent) {
        boton.attachEvent("onclick", validar);
    }
}

function validar() {
    var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
    var dato = document.frmdatos.txtdato.value;
    var valido = false;
    var re = null;
    //alert(dato + "|" + tipo);
    if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de formulario");
        return 0;
    }
    switch (tipo) {

        // IPv4 (0-255.0-255.0-255.0-255)
        case "ipv4":
            re = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

            // URL (http, https, ftp y //)
        case "url":
            re = /^(https?:\/\/|ftp:\/\/|\/\/)[^\s/$.?#].[^\s]*$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

            // Correo electrónico
        case "correo":
            re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (re.test(dato)) {
                valido = true;
            }
            break;

        default:
            alert("El tipo de dato seleccionado no puede ser procesado");
            break;
    }
    if (valido == true) {
        alert("El valor " + dato + " de " + tipo + " ingresado es válido");
    } else if (valido == false) {
        alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
    }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}