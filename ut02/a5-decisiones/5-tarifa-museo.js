const edad = Number(prompt("Introduce tu edad:"));
const tieneCarnet = prompt("¿Tienes carnet de estudiante? (si/no):").toLowerCase().trim();
const diaSemana = prompt("Introduce el día de la semana (ej. lunes, miercoles):").toLowerCase().trim();

if (Number.isNaN(edad) || edad < 0) {
  console.error("Error: Introduce una edad válida.");
} else {
  let precioFinal = 12;

  if (diaSemana === "miercoles" || diaSemana === "miércoles") {
    precioFinal = 0;
  } else if (edad < 6 || edad > 65) {
    precioFinal = 0;
  } else if ((edad >= 6 && edad <= 17) || tieneCarnet === "si") {
    precioFinal = 12 * 0.5;
  }

  const mensaje = precioFinal === 0 ? "Entrada gratuita" : `Precio: ${precioFinal.toFixed(2)} €`;

  console.log(`--- Tarifa de Entrada ---`);
  console.log(`Edad: ${edad} | Carnet: ${tieneCarnet} | Día: ${diaSemana}`);
  console.log(mensaje);
}