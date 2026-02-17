// Inicialización de variables
var numeros = [];
var i, j, max, temp;
// Validación para que el número de elementos del arreglo sea
// numérico y mayor o igual que 2
do {
   max = prompt("Cuántos números va a ingresar (valor entero):", "");
   // Verificar que se ingrese un dato numérico
   if (isNaN(max)) {
      alert("El valor digitado no es numérico.");
      continue;
   }
   // Verificar que el valor ingresado sea mayor o igual que 2
   if (max < 2) {
      alert("El arreglo debe ser de dimensión 2 o superior");
   }
} while (isNaN(max) || max < 2);

// Lazo para solicitar el ingreso de los elementos del arreglo

var cancelado = false;

for (i = 0; i < max; i++) {

   var valor;

   do {
      valor = prompt("Ingrese el número " + (i + 1) + ":");

      // Si presiona Cancelar
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

   if (cancelado) {
      break;
   }
}

if (cancelado) {
   document.getElementById("resultado").innerHTML =
      "<h3 class='text-danger'>Proceso cancelado.</h3>";
   return;
}

// Crear el contenido HTML
var contenido = "<h1>Números ingresados</h1>";
contenido += "<hr>";
contenido += "<table class=\"table table-bordered table-hover\"><tr>";
for (i = 0; i < max; i++) {
   contenido += "<td class=\"Off\" onmouseover=\"this.className='On'\"onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}
contenido += "</tr></table>";
// Lazo que ordena el arreglo mediante el método de la burbuja
for (i = 0; i < max - 1; i++) {
   for (j = i + 1; j < max; j++) {
      if (numeros[i] > numeros[j]) {
         temp = numeros[j];
         numeros[j] = numeros[i];
         numeros[i] = temp;
      }
   }
}
contenido += "<h1 class=\"mt-5\">Números ordenados ascendentemente</h1>";
contenido += "<hr>";
contenido += "<table class=\"table table-bordered table-hover\"><tr>";
for (i = 0; i < max; i++) {
   contenido += "<td class=\"Off\" onmouseover=\"this.className='On'\"onmouseout=\"this.className='Off'\">" + numeros[i] + "</td>";
}
contenido += "</tr></table>";

// Insertar el contenido en el div#resultado
document.getElementById("resultado").innerHTML = contenido;