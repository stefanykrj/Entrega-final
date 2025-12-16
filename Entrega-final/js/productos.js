const productos = [
  {
    id: 1,
    nombre: "Vela Té Rojo",
    precio: 14550,
    img: "/assets/img/vela-te-rojo.jpeg"
  },
  {
    id: 2,
    nombre: "Tropical Punch",
    precio: 14550,
    img: "assets/img/vela-tropical-punch.jpeg"
  },
  {
    id: 3,
    nombre: "Coco Cream",
    precio: 14550,
    img: "assets/img/vela-coco-cream.jpeg"
  }
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button onclick="agregarProducto(${producto.id})">Agregar</button>
  `;
  contenedor.appendChild(card);
});

function agregarProducto(id) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById("modal").classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("oculto");
}