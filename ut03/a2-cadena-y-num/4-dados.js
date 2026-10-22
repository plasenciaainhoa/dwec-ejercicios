
/**
 * Devuelve un entero aleatorio entre min y max, ambos incluidos.
 * @param {number} min - Valor mínimo.
 * @param {number} max - Valor máximo.
 * @returns {number} Entero aleatorio.
 */
function enteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("4. DADOS Y PORCENTAJES");

const contadores = [0, 0, 0, 0, 0, 0];
const tiradas = 1000;

for (let i = 0; i < tiradas; i++) {
    const cara = enteroAleatorio(1, 6);
    contadores[cara - 1]++;
}

const resultados = [];

for (let cara = 1; cara <= 6; cara++) {
    resultados.push({
        cara: cara,
        veces: contadores[cara - 1],
        porcentaje: (contadores[cara - 1] / tiradas * 100).toFixed(2) + "%"
    });
}

console.table(resultados);
console.log("El porcentaje esperado por cara es aproximadamente 16,67 %.");
