const entrada = prompt("Introduce un valor:");
const valorNumerico = Number(entrada);

console.log("Texto recibido:", entrada);
console.log("typeof:", typeof entrada);
console.log("Number():", valorNumerico);
console.log("parseInt():", parseInt(entrada));
console.log("parseFloat():", parseFloat(entrada));
console.log("Number.isNaN():", Number.isNaN(valorNumerico));