
console.log("3. MISMO IMPORTE, CUATRO PAÍSES");

const entrada = prompt("Introduce un importe, por ejemplo 1234.56:");
const importe = entrada === null ? NaN : Number(entrada.trim());

if (entrada === null || entrada.trim() === "" ||
    !Number.isFinite(importe)) {
    console.log("Importe incorrecto.");
} else {
    const configuraciones = [
        { idioma: "es-ES", moneda: "EUR" },
        { idioma: "en-US", moneda: "USD" },
        { idioma: "de-DE", moneda: "EUR" },
        { idioma: "ja-JP", moneda: "JPY" },
        { idioma: "en-IN", moneda: "INR" }
    ];

    const resultados = [];

    for (const config of configuraciones) {
        const formato = new Intl.NumberFormat(config.idioma, {
            style: "currency",
            currency: config.moneda
        });

        resultados.push({
            idioma: config.idioma,
            moneda: config.moneda,
            importe: formato.format(importe)
        });
    }

    console.table(resultados);
}
