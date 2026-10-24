
/**
 * Sustituye todas las apariciones de una palabra por asteriscos.
 * No distingue entre mayúsculas y minúsculas.
 * @param {string} frase - Frase original.
 * @param {string} palabra - Palabra que se quiere censurar.
 * @returns {string} Frase censurada.
 */
function censurarPalabra(frase, palabra) {
    if (palabra.length === 0) {
        return frase;
    }

    const fraseMinusculas = frase.toLowerCase();
    const palabraMinusculas = palabra.toLowerCase();
    const asteriscos = "*".repeat(palabra.length);

    let resultado = "";
    let posicion = 0;
    let indice = fraseMinusculas.indexOf(palabraMinusculas, posicion);

    while (indice !== -1) {
        resultado += frase.slice(posicion, indice) + asteriscos;
        posicion = indice + palabra.length;
        indice = fraseMinusculas.indexOf(palabraMinusculas, posicion);
    }

    return resultado + frase.slice(posicion);
}

console.log("3. CENSURA");

const frase = prompt("Escribe una frase:");
const palabra = prompt("¿Qué palabra quieres censurar?");

if (frase !== null && palabra !== null) {
    console.log("Frase censurada:", censurarPalabra(frase, palabra));
} else {
    console.log("Has cancelado la entrada.");
}
