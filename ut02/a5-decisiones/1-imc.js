const peso = Number(prompt("Introduce tu peso en kg:"));
const alturaCm = Number(prompt("Introduce tu altura en cm:"));

if (Number.isNaN(peso) || Number.isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
    console.error("Error: El peso y la altura deben ser números mayores que cero.");
    } else {
        const alturaMetros = alturaCm / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        
        let categoria = "";
        if (imc < 18.5) {
            categoria = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            categoria = "Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }

        console.log(`Peso: ${peso} kg | Altura: ${alturaCm} cm`);
        console.log(`Tu IMC es ${imc.toFixed(1)}: ${categoria}`);
}