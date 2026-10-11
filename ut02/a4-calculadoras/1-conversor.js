const km = Number(prompt("Introduce una cantidad en kilómetros: "));

const metros = km * 1000;
const millas = (km * 0.621371).toFixed(2);
const millasNauticas = (km * 0.539957).toFixed(2);

console.log(`Usted a añadido (${km} km)`);
console.log(`Metros: ${metros} m`);
console.log(`Millas: ${millas} mi`);
console.log(`Millas náuticas: ${millasNauticas} NM`);

const celsius = Number(prompt("Introduce una temperatura en grados Celsius:"));

const fahrenheit = (celsius * 9 / 5 + 32).toFixed(2);
const kelvin = (celsius + 273.15).toFixed(2);

console.log(`Usted a añadido (${celsius} °C)`);
console.log(`Fahrenheit: ${fahrenheit} °F`);
console.log(`Kelvin: ${kelvin} K`);