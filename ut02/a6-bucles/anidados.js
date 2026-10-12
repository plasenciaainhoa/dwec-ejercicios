let resultadoTabla = "";

for (let i = 1; i <= 5; i++) {
  resultadoTabla += `\n--- Tabla del ${i} ---\n`;
  for (let j = 1; j <= 5; j++) {
    resultadoTabla += `${i} x ${j} = ${i * j}\n`;
  }
}

console.log("--- Bucles Anidados (Tablas de multiplicar) ---");
console.log(resultadoTabla);