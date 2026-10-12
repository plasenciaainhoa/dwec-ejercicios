let numeroSecreto = 7;
let intentos = 0;
let adivinado = false;

while (!adivinado) {
  let entrada = prompt("Adivina el número secreto (entre 1 y 10):");
  let intento = Number(entrada);
  intentos++;

  if (intento === numeroSecreto) {
    adivinado = true;
    console.log(`--- Bucle While ---`);
    console.log(`¡Enhorabuena! Has acertado el número ${numeroSecreto} en ${intentos} intentos.`);
  } else {
    console.log("Fallaste, prueba otra vez.");
  }
}