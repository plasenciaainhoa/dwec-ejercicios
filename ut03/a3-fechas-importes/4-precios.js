
console.log("4. TABLA DE PRECIOS LOCALIZADA");

const textoPrecios = "12.5,8,1250,0.99,19999";
const precios = textoPrecios.split(",").map(Number);
const igic = 0.07;

// Creamos un único formateador de moneda y lo reutilizamos.
const formatoEuro = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
});

const formatoPorcentaje = new Intl.NumberFormat("es-ES", {
    style: "percent",
    maximumFractionDigits: 0
});

const tabla = [];

for (const precio of precios) {
    const impuesto = precio * igic;
    const total = precio + impuesto;

    tabla.push({
        precio: formatoEuro.format(precio),
        igic: formatoEuro.format(impuesto),
        total: formatoEuro.format(total),
        porcentaje: formatoPorcentaje.format(igic)
    });
}

console.table(tabla);
