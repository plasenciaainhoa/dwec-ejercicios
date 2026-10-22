
console.log("5. EL IDIOMA DEL USUARIO");

console.log("Idioma del navegador:", navigator.language);
console.log("Idiomas preferidos:", navigator.languages);

const hoy = new Date();

const formatoFecha = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "full"
});

console.log("Fecha de hoy:", formatoFecha.format(hoy));
