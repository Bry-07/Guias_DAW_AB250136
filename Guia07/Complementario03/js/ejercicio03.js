function iniciar() {
    cargarLista();

    document.getElementById("mostrar").addEventListener("click", mostrarDefinicion);
    document.getElementById("lista").addEventListener("dblclick", mostrarDefinicion);
    document.getElementById("filtro").addEventListener("keyup", filtrar);
}

var diccionario = {
    "a": "Primera letra del abecedario",
    "abeja": "Insecto que produce miel",
    "abrazo": "Acción de rodear con los brazos",
    "acuerdo": "Decisión tomada entre personas",
    "altura": "Medida vertical",

    "b": "Segunda letra del abecedario",
    "barco": "Vehículo que navega",
    "bebida": "Líquido para consumir",
    "bosque": "Lugar con muchos árboles",
    "brillo": "Luz que refleja algo",

    "c": "Tercera letra del abecedario",
    "casa": "Lugar donde se vive",
    "correr": "Moverse rápidamente",
    "cielo": "Espacio sobre la tierra",
    "cultura": "Conjunto de costumbres",
    "calor": "Energía térmica",

    "d": "Cuarta letra del abecedario",
    "dado": "Objeto de juego",
    "dedo": "Parte de la mano",
    "diente": "Pieza de la boca",
    "dibujo": "Representación gráfica",
    "dulce": "Sabor agradable",

    "e": "Quinta letra del abecedario",
    "elefante": "Animal grande",
    "escuela": "Lugar de estudio",
    "estrella": "Cuerpo celeste",
    "energía": "Capacidad de trabajo",
    "espejo": "Refleja imágenes",

    "f": "Sexta letra del abecedario",
    "fuego": "Combustión que produce calor",
    "familia": "Grupo de personas",
    "flor": "Parte de una planta",
    "fruta": "Alimento natural",
    "fuerza": "Capacidad física",

    "g": "Séptima letra del abecedario",
    "gato": "Animal doméstico",
    "grande": "De gran tamaño",
    "guerra": "Conflicto armado",
    "guitarra": "Instrumento musical",
    "globo": "Objeto inflable",

    "h": "Octava letra del abecedario",
    "hielo": "Agua congelada",
    "hogar": "Lugar donde se vive",
    "huevo": "Producto de aves",
    "historia": "Relato del pasado",
    "hombro": "Parte del cuerpo",

    "i": "Novena letra del abecedario",
    "isla": "Tierra rodeada de agua",
    "idea": "Pensamiento",
    "imagen": "Representación visual",
    "invierno": "Estación fría",
    "insecto": "Animal pequeño",

    "j": "Décima letra del abecedario",
    "juego": "Actividad recreativa",
    "jardín": "Lugar con plantas",
    "joven": "Persona de poca edad",
    "jugo": "Líquido de frutas",
    "jefe": "Persona a cargo",

    "k": "Letra del abecedario",
    "koala": "Animal marsupial",
    "kiwi": "Fruta verde",
    "karate": "Arte marcial",
    "kilo": "Unidad de medida",
    "kiosco": "Pequeño puesto",

    "l": "Letra del abecedario",
    "luz": "Energía visible",
    "libro": "Conjunto de páginas",
    "lago": "Agua acumulada",
    "lengua": "Órgano del habla",
    "lápiz": "Instrumento para escribir",

    "m": "Letra del abecedario",
    "mano": "Parte del cuerpo",
    "mesa": "Mueble",
    "mar": "Gran masa de agua",
    "música": "Arte del sonido",
    "montaña": "Elevación natural",

    "n": "Letra del abecedario",
    "nube": "Vapor en el cielo",
    "niño": "Persona joven",
    "noche": "Parte oscura del día",
    "nariz": "Parte de la cara",
    "número": "Representación matemática",

    "ñ": "Letra del abecedario español",
    "niñez": "Etapa de la vida",
    "ñoño": "Persona sensible",
    "ñandú": "Ave sudamericana",
    "ñame": "Tipo de planta",
    "ñu": "Animal africano",

    "o": "Letra del abecedario",
    "oso": "Animal grande",
    "ojo": "Órgano de la vista",
    "oro": "Metal valioso",
    "ola": "Movimiento del agua",
    "orden": "Organización",

    "p": "Letra del abecedario",
    "perro": "Animal doméstico",
    "pan": "Alimento básico",
    "puerta": "Entrada a un lugar",
    "planta": "Ser vivo vegetal",
    "pelota": "Objeto redondo",

    "q": "Letra del abecedario",
    "queso": "Derivado de la leche",
    "química": "Ciencia",
    "querer": "Sentimiento",
    "quieto": "Sin movimiento",
    "quinto": "Número ordinal",

    "r": "Letra del abecedario",
    "ratón": "Animal pequeño",
    "rojo": "Color",
    "río": "Corriente de agua",
    "rueda": "Objeto circular",
    "ropa": "Vestimenta",

    "s": "Letra del abecedario",
    "sol": "Estrella",
    "silla": "Objeto para sentarse",
    "sal": "Condimento",
    "sombra": "Oscuridad parcial",
    "sonido": "Vibración audible",

    "t": "Letra del abecedario",
    "tigre": "Felino",
    "tierra": "Planeta",
    "tiempo": "Magnitud",
    "techo": "Parte superior",
    "tren": "Transporte",

    "u": "Letra del abecedario",
    "uva": "Fruta",
    "universo": "Todo lo existente",
    "uno": "Número",
    "útil": "Que sirve",
    "uniforme": "Ropa igual",

    "v": "Letra del abecedario",
    "viento": "Aire en movimiento",
    "vida": "Existencia",
    "vaso": "Recipiente",
    "verde": "Color",
    "viaje": "Desplazamiento",

    "w": "Letra del abecedario",
    "wifi": "Red inalámbrica",
    "web": "Sistema de páginas",
    "whisky": "Bebida",
    "walkman": "Reproductor",
    "waterpolo": "Deporte",

    "x": "Letra del abecedario",
    "xilófono": "Instrumento musical",
    "xenón": "Elemento químico",
    "xilografía": "Grabado",
    "xenofobia": "Rechazo a extranjeros",
    "xerografía": "Copia de documentos",

    "y": "Letra del abecedario",
    "yate": "Barco de lujo",
    "yema": "Parte del huevo",
    "yogur": "Alimento",
    "yuca": "Raíz comestible",
    "yacimiento": "Lugar con recursos",

    "z": "Letra del abecedario",
    "zorro": "Animal astuto",
    "zapato": "Calzado",
    "zona": "Área",
    "zoológico": "Lugar de animales",
    "zumo": "Jugo"
};

function cargarLista() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (var palabra in diccionario) {
        var opcion = document.createElement("option");
        opcion.value = palabra;
        opcion.text = palabra;
        lista.appendChild(opcion);
    }
}

function mostrarDefinicion() {
    var lista = document.getElementById("lista");
    var palabra = lista.value;

    document.getElementById("definicion").value = diccionario[palabra] || "";
}

function filtrar() {
    var filtro = document.getElementById("filtro").value.toLowerCase();
    var lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (var palabra in diccionario) {
        if (palabra.toLowerCase().includes(filtro)) {
            var opcion = document.createElement("option");
            opcion.value = palabra;
            opcion.text = palabra;
            lista.appendChild(opcion);
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}