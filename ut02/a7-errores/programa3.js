const precioOriginal = Number(prompt("Introduce el precio:"));
const descuento = 0.20;
const precioFinal = precioOriginal - (precioOriginal * descuento);

console.log("El precio final con descuento es: " + precioFinal + " €");