console.log("Calificación de objetos");


const objetos = [
    { nombre: "Math", tipo: typeof Math, familia: "Nativo del lenguaje" },
    { nombre: "Date", tipo: typeof Date, familia: "Nativo del lenguaje" },
    { nombre: "JSON", tipo: typeof JSON, familia: "Nativo del lenguaje" },
    { nombre: "window", tipo: typeof window, familia: "Navegador" },
    { nombre: "document", tipo: typeof document, familia: "Documento" },
    { nombre: "location", tipo: typeof location, familia: "Navegador" },
    { nombre: "navigator", tipo: typeof navigator, familia: "Navegador" },
    { nombre: "console", tipo: typeof console, familia: "Navegador" },
    { nombre: "setTimeout", tipo: typeof setTimeout, familia: "Navegador" },
    { nombre: "Intl", tipo: typeof Intl, familia: "Nativo del lenguaje" }
];

console.table(objetos);

console.log("3. PROPIEDADES DE NAVIGATOR");

if (typeof navigator !== "undefined") {
    console.log("Número de procesadores lógicos:",
        navigator.hardwareConcurrency);

    console.log("Puntos táctiles máximos:",
        navigator.maxTouchPoints);

    console.log("Cookies habilitadas:",
        navigator.cookieEnabled);
} else {
    console.log("navigator no está disponible en este entorno.");
}

console.log("4. PROPIEDADES Y MÉTODOS DE MATH");

console.log("Object.keys(Math).length:",
    Object.keys(Math).length);

console.log("Object.getOwnPropertyNames(Math).length:",
    Object.getOwnPropertyNames(Math).length);

console.log("Máximo entre 3, 9 y 4:",
    Math.max(3, 9, 4));

console.log("Valor absoluto de -7:",
    Math.abs(-7));