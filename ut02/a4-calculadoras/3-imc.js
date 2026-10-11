const peso = Number(prompt("Introduce tu peso en kg : "));
const alturaCm = Number(prompt("Introduce tu altura en cm : "));

const alturaMetros = altura / 100;

const imc = peso / (altura * alturaMetros);

console.log(`Peso: ${peso} kg | Altura: ${alturaCm} cm`);
console.log(`Tu IMC es: ${imc.toFixed(1)}`);