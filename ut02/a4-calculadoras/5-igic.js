function precioConIgic(base, tipo) {
    const tipoIgic = tipo ?? 7;

    const impuesto = base * (tipoIgic / 100);
    const total = base + impuesto;

    return {
        impuesto: Number(impuesto.toFixed(2)),
        total: Number(total.toFixed(2))
    };
}

const precioBase = Number(prompt("Introduce el precio sin impuestos:"));
const tipoIngresado = Number(prompt("Introduce el tipo de IGIC (ej. 7, 13, 20) o pulsa cancelar:"));
const tipoIgicElegido = Number.isNaN(tipoIngresado) ? null : tipoIngresado;

const resultado = precioConIgic(precioBase, tipoIgicElegido);

console.log(`Precio base: ${precioBase} €`);
console.log(`Tipo de IGIC aplicado: ${tipoIngresado ?? 7} %`);
console.log(`Importe del impuesto: ${resultado.impuesto} €`);
console.log(`Precio total: ${resultado.total} €`);