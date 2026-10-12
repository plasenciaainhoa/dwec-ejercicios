const mes = Number(prompt("Introduce el número del mes (1-12):"));
const anio = Number(prompt("Introduce el año:"));

if (Number.isNaN(mes) || Number.isNaN(anio) || mes < 1 || mes > 12 || anio <= 0) {
    console.error("Error: Introduce un mes válido (1-12) y un año positivo.");
} else {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    
    let dias = 0;

    switch (mes) {
        case 1:  // Enero
        case 3:  // Marzo
        case 5:  // Mayo
        case 7:  // Julio
        case 8:  // Agosto
        case 10: // Octubre
        case 12: // Diciembre
        dias = 31;
        break;
        case 4:  // Abril
        case 6:  // Junio
        case 9:  // Septiembre
        case 11: // Noviembre
        dias = 30;
        break;
        case 2:  // Febrero
        dias = esBisiesto ? 29 : 28;
        break;
    }

    console.log(`--- Días del Mes ---`);
    console.log(`Mes: ${mes} | Año: ${anio} (${esBisiesto ? "Bisiesto" : "No bisiesto"})`);
    console.log(`Este mes tiene ${dias} días.`);
}