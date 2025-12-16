const contenedor = document.getElementById("carrito-contenedor");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length === 0) {
  contenedor.innerHTML = "<p>Aún no se ha añadido productos</p>"   ;
} else {
  let total = 0;

  carrito.forEach((producto, index) => {
    total += producto.precio;

    contenedor.innerHTML += `
      <div class="carrito-item">
        <img src="${producto.img}" width="70" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <button onclick="eliminarProducto(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#ffffff" d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5zm3 9H4V7h1zm2 0H6V7h1zm2 0H8V7h1zm2 0h-1V7h1zm2.25-12H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.75.75 0 0 0-.75.75V4h13V2.75a.75.75 0 0 0-.75-.75M9 2H6v-.987h3z"/></svg>
        </button>
      </div>
    `;
  });

  contenedor.innerHTML += `<h3>Total: $${total}</h3>`;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}