
console.log("2. CUENTA DE DÍAS");

/**
 * Calcula los días entre hoy y una fecha.
 * @param {string} textoFecha - Fecha en formato AAAA-MM-DD.
 * @returns {number} Días restantes o días transcurridos.
 */
function diasHasta(textoFecha) {
    const hoy = new Date();
    const hoyUTC = Date.UTC(
        hoy.getFullYear(), hoy.getMonth(), hoy.getDate()
    );

    const fecha = new Date(textoFecha + "T00:00:00Z");
    const diferencia = Date.UTC(
        fecha.getUTCFullYear(),
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    ) - hoyUTC;

    return Math.round(diferencia / 86400000);
}

const relativo = new Intl.RelativeTimeFormat("es-ES", {
    numeric: "always"
});

const fechas = [
    { nombre: "Final de la primera evaluación", fecha: "2026-12-18" },
    { nombre: "Final de las clases en el centro", fecha: "2027-02-05" }
];

for (const elemento of fechas) {
    const dias = diasHasta(elemento.fecha);

    console.log(elemento.nombre + ":");

    if (dias > 0) {
        console.log("Faltan", dias, "días");
    } else if (dias < 0) {
        console.log("Han pasado", Math.abs(dias), "días");
    } else {
        console.log("Es hoy");
    }

    console.log("Con Intl:", relativo.format(dias, "day"));
}
