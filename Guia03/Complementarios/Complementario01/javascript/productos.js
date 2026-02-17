let productos = []; // Arreglopara almacenar los productos

function agregarProducto() {
    const nombre = document.getElementById("nombre").value.trim(); 
    const precio = parseFloat(document.getElementById("precio").value); 
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Validar
    if (!nombre || isNaN(precio) || precio <= 0 || isNaN(cantidad) || cantidad <= 0) { // Validar datos
        alert("Por favor, ingrese datos válidos."); 
        return;
    }

    productos.push({ nombre, precio, cantidad });

    document.getElementById("nombre").value = ""; // Limpiar campos
    document.getElementById("precio").value = ""; // Limpiar campos
    document.getElementById("cantidad").value = ""; // Limpiar campos

    mostrarProductos();
}

function mostrarProductos() {
    const tbody = document.querySelector("#tablaProductos tbody");
    tbody.innerHTML = "";

    let total = 0;

    productos.forEach((prod, index) => {
        const fila = document.createElement("tr");
        const sub = prod.precio * prod.cantidad;
        total += sub;

        fila.innerHTML = `
            <td>${prod.nombre}</td>
            <td>$${prod.precio.toFixed(2)}</td>
            <td>${prod.cantidad}</td>
            <td>$${sub.toFixed(2)}</td>
            <td>
                <button onclick="eliminarProducto(${index})" 
                    class="btn btn-danger btn-sm">
                    Eliminar
                </button>
            </td>
        `;

        tbody.appendChild(fila);
    });

    //Total
    document.getElementById("total").textContent = total.toFixed(2);
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    mostrarProductos();
}

function eliminarTodos() {
    productos = [];
    mostrarProductos();
}