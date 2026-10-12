const entrada = prompt("Introduce una nota de 0 a 10:");
const nota = Number(entrada);

if (Number.isNaN(nota) || nota < 0 || nota > 10) {
    console.error("Error: Introduce un valor numérico válido comprendido entre 0 y 10.");
    } 
    else {
        let calificacion = "";

        if (nota < 5) {
            calificacion = "Insuficiente";
        } else if (nota < 6) {
            calificacion = "Suficiente";
        } else if (nota < 7) {
            calificacion = "Bien";
        } else if (nota < 9) {
            calificacion = "Notable";
        } else {
            calificacion = "Sobresaliente";
        }

        console.log(`Nota introducida: ${nota}`);
        console.log(`Resultado: ${calificacion}`);
    }