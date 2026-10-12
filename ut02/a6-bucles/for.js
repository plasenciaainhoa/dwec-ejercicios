const limite = Number(prompt("Introduce un número límite para la suma:"));

if (Number.isNaN(limite) || limite <= 0) {
  console.error("Error: Introduce un número válido mayor que cero.");
} else {
  let suma = 0;

  for (let i = 1; i <= limite; i++) {
    suma += i;
  }
  console.log(`La suma de los números del 1 al ${limite} es: ${suma}`);
}