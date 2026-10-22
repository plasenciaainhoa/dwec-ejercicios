
/**
 * Convierte un título en un slug.
 * @param {string} titulo - Título original.
 * @returns {string} Slug del título.
 */
function crearSlug(titulo) {
    return titulo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

console.log("2. SLUG Y NOMBRE DE FICHERO");

const titulo = prompt("Escribe un título:");

if (titulo !== null && titulo.trim() !== "") {
    const slug = crearSlug(titulo);
    const fecha = new Date().toISOString().slice(0, 10);
    const fichero = fecha + "-" + slug + ".md";

    console.log("Slug:", slug);
    console.log("Nombre de fichero:", fichero);
} else {
    console.log("No has introducido ningún título.");
}
