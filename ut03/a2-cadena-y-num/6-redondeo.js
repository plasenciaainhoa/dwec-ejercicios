
console.log("6. REDONDEOS");

const valores = [2.5, -2.5, 2.4999, 1.005];
const resultados = [];

for (const numero of valores) {
    resultados.push({
        numero: numero,
        round: Math.round(numero),
        floor: Math.floor(numero),
        ceil: Math.ceil(numero),
        trunc: Math.trunc(numero),
        toFixed: numero.toFixed(0)
    });
}

console.table(resultados);