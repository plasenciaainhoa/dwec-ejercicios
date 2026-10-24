/**
 * Normaliza un nombre poniendo la inicial de cada palabra
 * en mayúscula y el resto en minúscula.
 * @param {string} nombre - Nombre completo.
 * @returns {string} Nombre normalizado.
 */
function normalizarNombre(nombre) {
    const palabras = nombre.trim().split(/\s+/);
    const resultado = [];

    for (const palabra of palabras) {
        resultado.push(
            palabra.at(0).toUpperCase() + palabra.slice(1).toLowerCase()
        );
    }

    return resultado.join(" ");
}

/**
 * Genera las iniciales de un nombre completo.
 * @param {string} nombre - Nombre completo.
 * @returns {string} Iniciales separadas por puntos.
 */
function obtenerIniciales(nombre) {
    const palabras = nombre.trim().split(/\s+/);
    const iniciales = [];

    for (const palabra of palabras) {
        iniciales.push(palabra.at(0).toUpperCase() + ".");
    }

    return iniciales.join(" ");
}

console.log("1. NOMBRE NORMALIZADO");

const nombreIntroducido = prompt("Escribe tu nombre y apellidos:");

if (nombreIntroducido !== null && nombreIntroducido.trim() !== "") {
    console.log("Nombre:", normalizarNombre(nombreIntroducido));
    console.log("Iniciales:", obtenerIniciales(nombreIntroducido));
    console.log("Número de palabras:",
        nombreIntroducido.trim().split(/\s+/).length);
} else {
    console.log("No has introducido ningún nombre.");
}