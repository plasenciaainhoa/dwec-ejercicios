const segundosTotales = Number(prompt("Introduce un número de segundos:"));

const horas = Math.trunc(segundosTotales / 3600);
const minutos = Math.trunc((segundosTotales % 3600) / 60);
const segundos = segundosTotales % 60;

const horasStr = String(horas).padStart(2, '0');
const minutosStr = String(minutos).padStart(2, '0');
const segundosStr = String(segundos).padStart(2, '0');

console.log(`Usted a añadido (${segundosTotales} segundos)`);
console.log(`Formato h:mm:ss -> ${horasStr}:${minutosStr}:${segundosStr}`);