const entrada = prompt("Introduce un año para comprobar si es bisiesto:");
const anio = Number(entrada);

if (Number.isNaN(anio) || anio <= 0) {
    console.error("Error: Introduce un año válido en formato numérico.");
} else {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

    console.log(`--- Comprobación de Año Bisiesto ---`);
    console.log(`El año ${anio} ${esBisiesto ? "sí es bisiesto" : "no es bisiesto"}.`);
}