
console.log("1. EDAD EXACTA");

/**
 * Comprueba que una fecha tenga el formato AAAA-MM-DD
 * y que sea una fecha real.
 * @param {string} texto - Fecha introducida.
 * @returns {Date|null} Fecha válida o null.
 */
function validarFecha(texto) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
        return null;
    }

    const fecha = new Date(texto + "T00:00:00");

    if (Number.isNaN(fecha.getTime()) ||
        fecha.toISOString().slice(0, 10) !== texto) {
        return null;
    }

    return fecha;
}

const nacimientoTexto = prompt("Introduce tu fecha de nacimiento (AAAA-MM-DD):");
const nacimiento = nacimientoTexto === null ? null : validarFecha(nacimientoTexto);

if (nacimiento === null) {
    console.log("Fecha cancelada o incorrecta.");
} else {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (nacimiento > hoy) {
        console.log("La fecha de nacimiento no puede ser futura.");
    } else {
        let edad = hoy.getFullYear() - nacimiento.getFullYear();

        const yaCumplio =
            hoy.getMonth() > nacimiento.getMonth() ||
            (hoy.getMonth() === nacimiento.getMonth() &&
             hoy.getDate() >= nacimiento.getDate());

        if (!yaCumplio) {
            edad--;
        }

        const diaSemana = new Intl.DateTimeFormat("es-ES", {
            weekday: "long",
            timeZone: "UTC"
        }).format(nacimiento);

        // Calculamos el próximo cumpleaños.
        let anioCumple = hoy.getFullYear();
        let proximoCumple = new Date(
            anioCumple,
            nacimiento.getMonth(),
            nacimiento.getDate()
        );

        proximoCumple.setHours(0, 0, 0, 0);

        if (proximoCumple < hoy) {
            anioCumple++;
            proximoCumple = new Date(
                anioCumple,
                nacimiento.getMonth(),
                nacimiento.getDate()
            );
            proximoCumple.setHours(0, 0, 0, 0);
        }

        const diasFaltan = Math.round(
            (Date.UTC(
                proximoCumple.getFullYear(),
                proximoCumple.getMonth(),
                proximoCumple.getDate()
            ) - Date.UTC(
                hoy.getFullYear(),
                hoy.getMonth(),
                hoy.getDate()
            )) / 86400000
        );

        console.log("Edad:", edad, "años");
        console.log("Día de nacimiento:", diaSemana);
        console.log("Días hasta el próximo cumpleaños:", diasFaltan);
    }
}
