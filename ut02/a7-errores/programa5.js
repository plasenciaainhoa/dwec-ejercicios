const numeroSecreto = 5;
const intento = Number(prompt("Adivina el número del 1 al 5:"));

if (intento === numeroSecreto) {
    console.log("¡Has ganado!");
} else {
    console.log("Has perdido, prueba otra vez.");
}