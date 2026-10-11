const entrada = prompt("Introduce un número o valor para probar:");
const numeroConvertido = Number(entrada);+

console.log("Texto recibido:", entrada);
console.log("typeof del valor:", typeof entrada);
console.log("Resultado con Number():", numeroConvertido);
console.log("Resultado con parseInt():", parseInt(entrada));
console.log("Resultado con parseFloat():", parseFloat(entrada));
console.log("¿Es un número válido? (Number.isNaN):", Number.isNaN(numeroConvertido));